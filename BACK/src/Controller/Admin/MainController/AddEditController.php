<?php

namespace App\Controller\Admin\MainController;

use App\Entity\Picture;
use App\Entity\Painting;
use App\Form\PaintingType;
use App\Service\PagesNavigator;
use App\Service\FormatConversion;
use App\Repository\SizeRepository;
use App\Repository\FrameRepository;
use App\Repository\PictureRepository;
use App\Repository\PaintingRepository;
use App\Repository\SituationRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\CheckingExistingPainting;
use App\Service\MovePictures;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class AddEditController extends AbstractController
{
    private $directoryAttachment;

    public function __construct($directoryAttachment)
    {
        $this->directoryAttachment = $directoryAttachment;
    }

    /**
     * Form to edit the informations of a painting
     * 
     * @Route(
     *      "/paint/edit/{id<\d+>}",
     *      name="paint_edit",
     *      methods={"GET", "POST"},
     * )
     */
    public function edit(Painting $painting = null, $id, Request $request, EntityManagerInterface $em, PictureRepository $pictureRepository, FormatConversion $formatConversion, CheckingExistingPainting $checkingExistingPainting, MovePictures $mp)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        $form = $this->createForm(PaintingType::class, $painting);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if (null != $request->files->get('painting')['picture']) {
                $picture = $pictureRepository->find($painting->getPicture());

                $picture = $mp->moveThePicture($picture, $request->files->get('painting')['picture']);
    
                $painting->setPicture($picture);

                $newDbTitle = str_replace(['-', '_'], ' ', $picture->getTitle());

                if ($newDbTitle != $painting->getDbName()) {
                    $painting->setDbName($newDbTitle);                
                }
            }
            // Automatic modification of the size and format
            $painting = $formatConversion->setSizes($painting);

            if (0 !== $painting->getSize()->getId()) {
                // Setting warning is there is a size error
                $painting = $formatConversion->setWarningSizeMessage($painting);

                $checkingConversion = $formatConversion->checkWidthHeightAndFormat($painting->getSize()->getFormat(), $painting->getHeight(), $painting->getWidth());

                if (!$checkingConversion) {
                    $this->addFlash('danger', 'Il y a une différence entre les dimensions et le format mentionné !');
                }    
            }

            $existingPainting = $checkingExistingPainting->checkPainting($painting);
            if ($existingPainting['check']) {
                $this->addFlash('warning', $existingPainting['message']);
            } else {
                $this->addFlash('success', 'Peinture modifiée avec succès !');
            }

            $em->flush();

            return $this->redirectToRoute('read_paint', ['id' => $id]);
        }

        return $this->render('main/edit.html.twig', [
            'painting' => $painting,
            'method' => 'Modification',
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/paint/add", name="paint_add", methods={"POST", "GET"})
     */
    public function add(EntityManagerInterface $em, Request $request, FormatConversion $formatConversion, CheckingExistingPainting $checkingExistingPainting, FrameRepository $fr, SituationRepository $sitr, SizeRepository $sr, SluggerInterface $slugger, MovePictures $mp)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        $painting = new Painting();

        $form = $this->createForm(PaintingType::class, $painting);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Insertion of the picture
            $picture = new Picture();

            $picture = $mp->moveThePicture($picture, $request->files->get('painting')['picture']);

            $em->persist($picture);

            if (null == $painting->getDbName()) {
                $dbName = str_replace(['-', '_'], ' ', $picture->getTitle());
                $painting->setDbName($dbName);                
            }

            $painting->setPicture($picture);
            // End of picture
            if (null === $painting->getFrame()) {
                $painting->setFrame($fr->find(1));
            }
            if (null === $painting->getSituation()) {
                $painting->setSituation($sitr->find(1));
            }
            if (null === $painting->getSize()) {
                $painting->setSize($sr->find(0));
            }
            $painting->setWebDisplay(0);

            // Automatic modification of the size and format
            $painting = $formatConversion->setSizes($painting);
            // Setting warning is there is a size error
            $painting = $formatConversion->setWarningSizeMessage($painting);

            if (0 !== $painting->getSize()->getId()) {
                $checkingConversion = $formatConversion->checkWidthHeightAndFormat($painting->getSize()->getFormat(), $painting->getHeight(), $painting->getWidth());

                if (!$checkingConversion) {
                    $this->addFlash('danger', 'Il y a une différence entre les dimensions et le format mentionné !');
                }    
            }
            // End of the size and format

            $existingPainting = $checkingExistingPainting->checkPainting($painting);
            if ($existingPainting['check']) {
                $this->addFlash('warning', $existingPainting['message']);
            } else {
                $this->addFlash('success', 'Peinture ajoutée avec succès !');
            }

            $em->persist($painting);
            $em->flush();

            return $this->redirectToRoute('read_paint', ['id' => $painting->getId()]);
        }

        return $this->render('main/edit.html.twig', [
            'form' => $form->createView(),
            'method' => 'Création',
        ]);
    }

    /**
     * @Route(
     *      "/paint/display-on-website/{id<\d+>}",
     *      name="display_on_website",
     *      methods={"POST"},
     * )
     */
    public function displayOnWebsite(Painting $painting = null, $id, EntityManagerInterface $em)
    {
        $painting->setWebDisplay(!$painting->getWebDisplay());
        $em->flush();

        return $this->redirectToRoute('read_paint', ['id' => $id]);
    }
}
