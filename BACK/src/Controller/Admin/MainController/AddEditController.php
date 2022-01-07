<?php

namespace App\Controller\Admin\MainController;

use App\Entity\Painting;
use App\Entity\Picture;
use App\Form\PaintingType;
use App\Repository\PictureRepository;
use App\Repository\SizeRepository;
use App\Service\FormatConversion;
use App\Service\PagesNavigator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AddEditController extends AbstractController
{
    /**
     * Form to edit the informations of a painting
     * 
     * @Route(
     *      "/paint/edit/{id<\d+>}",
     *      name="paint_edit",
     *      methods={"GET", "POST"},
     * )
     */
    public function edit(Painting $painting = null, $id, Request $request, EntityManagerInterface $em, PictureRepository $pictureRepository, FormatConversion $formatConversion, SizeRepository $sizeRepository)
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
                $actualPicture = $pictureRepository->find($painting->getPicture());
                $pictureTitle = preg_filter('/.(jpg|JPG|PNG|png|JPEG|jpeg)/', '', $request->files->get('painting')['picture']->getClientOriginalName());
                $actualPicture->setTitle($pictureTitle);
                $actualPicture->setPathname($request->files->get('painting')['picture']->getClientOriginalName());
                $actualPicture->setFile(base64_encode(file_get_contents($request->files->get('painting')['picture'])));
    
                $painting->setPicture($actualPicture);
            }

            // Automatic modification of the size and format
            if (null != $painting->getSize()) {
                if (null === $painting->getHeight() || null === $painting->getWidth()) {
                    $sizes = $formatConversion->getWidthHeightFromFormat($painting->getSize()->getFormat());
                    $painting->setHeight($sizes['height']);
                    $painting->setWidth($sizes['width']);    
                }
            }

            if (null === $painting->getSize()) {
                if (null != $painting->getHeight() && null != $painting->getWidth()) {
                    $format = $formatConversion->getFormatFromtWidthHeight($painting->getHeight(), $painting->getWidth());
                    if (false != $format) {
                        $foundSize = $sizeRepository->findOneBy(['format' => $format[1]]);     
                        $painting->setSize($foundSize);
    
                        if ('H' == $format[0]) {
                            $painting->setInformation('Format '.$format[1].' Horizontal. '.$painting->getInformation());
                        }    
                    }
                }
            }

            if ($painting->getHeight() < $painting->getWidth()) {
                if (null != $painting->getSize()) {
                    $retrieveHFormatToAdd = strstr($painting->getInformation(), 'Format '.$painting->getSize()->getFormat().' Horizontal');
                    if (false === $retrieveHFormatToAdd) {
                        $painting->setInformation('Format '.$painting->getSize()->getFormat().' Horizontal. '.$painting->getInformation());
                    }    
                }
            } else if ($painting->getHeight() > $painting->getWidth()) {
                if (null != $painting->getSize()) {
                    $retrieveHFormatToRemove = strstr($painting->getInformation(), 'Format '.$painting->getSize()->getFormat().' Horizontal');
                    if (false != $retrieveHFormatToRemove) {
                        $emptyHFormat = str_replace('Format '.$painting->getSize()->getFormat().' Horizontal.', '', $painting->getInformation());
                        $painting->setInformation('' != $emptyHFormat ? $emptyHFormat : null);
                    }
                }
            }
            // End of the size and format

            if (null != $painting->getSize()) {
                $comparison = $formatConversion->checkWidthHeightAndFormat($painting->getSize()->getFormat(), $painting->getHeight(), $painting->getWidth());
                if (!$comparison) {
                    $this->addFlash('danger', 'Il y a une différence entre les dimensions et le format mentionné !');
                    $painting->setInformation('Attention ! Il y a une différence entre les dimensions et le format mentionné ! '.$painting->getInformation());
                }
    
                if ($comparison) {
                    $checkMessageExists = strstr($painting->getInformation(), 'Attention ! Il y a une différence entre les dimensions et le format mentionné !');
                    if (false != $checkMessageExists) {
                        $removeComparison = str_replace('Attention ! Il y a une différence entre les dimensions et le format mentionné !', '', $painting->getInformation());
                        $painting->setInformation('' != $removeComparison ? $removeComparison : null);
                    }
                }    
            } else {
                $checkMessageExists = strstr($painting->getInformation(), 'Attention ! Il y a une différence entre les dimensions et le format mentionné !');
                if (false != $checkMessageExists) {
                    $removeComparison = str_replace('Attention ! Il y a une différence entre les dimensions et le format mentionné !', '', $painting->getInformation());
                    $painting->setInformation('' != $removeComparison ? $removeComparison : null);
                }
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
    public function add(EntityManagerInterface $em, Request $request, FormatConversion $formatConversion, SizeRepository $sizeRepository)
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
            
            $pictureTitle = preg_filter('/.(jpg|JPG|PNG|png|JPEG|jpeg)/', '', $request->files->get('painting')['picture']->getClientOriginalName());
            $picture->setTitle($pictureTitle);
            $picture->setPathname($request->files->get('painting')['picture']->getClientOriginalName());
            $picture->setFile(base64_encode(file_get_contents($request->files->get('painting')['picture'])));
            $em->persist($picture);

            if (null == $painting->getDbName()) {
                $dbName = str_replace(['-', '_'], ' ', $pictureTitle);
                $painting->setDbName($dbName);                
            }

            $painting->setPicture($picture);
            // End of picture

            // Automatic modification of the size and format
            if (null != $painting->getSize()) {
                if (null === $painting->getHeight() || null === $painting->getWidth()) {
                    $sizes = $formatConversion->getWidthHeightFromFormat($painting->getSize()->getFormat());
                    $painting->setHeight($sizes['height']);
                    $painting->setWidth($sizes['width']);

                    if ($painting->getHeight() < $painting->getWidth()) {
                        $painting->setInformation('Format '.$painting->getSize()->getFormat().' Horizontal. '.$painting->getInformation());
                    }
                }    
            }

            if (null === $painting->getSize()) {
                if (null != $painting->getHeight() && null != $painting->getWidth()) {
                    $format = $formatConversion->getFormatFromtWidthHeight($painting->getHeight(), $painting->getWidth());
                    if (false != $format) {
                        $foundSize = $sizeRepository->findOneBy(['format' => $format[1]]);     
                        $painting->setSize($foundSize);
    
                        if ('H' == $format[0]) {
                            $painting->setInformation('Format '.$format[1].' Horizontal. '.$painting->getInformation());
                        }    
                    }
                }
            }

            if (null != $painting->getSize()) {
                $checkingConversion = $formatConversion->checkWidthHeightAndFormat($painting->getSize()->getFormat(), $painting->getHeight(), $painting->getWidth());

                if (!$checkingConversion) {
                    $this->addFlash('danger', 'Il y a une différence entre les dimensions et le format mentionné !');
                    $painting->setInformation('Attention ! Il y a une différence entre les dimensions et le format mentionné ! '.$painting->getInformation());
                }    
            }

            // End of the size and format

            $em->persist($painting);
            $em->flush();

            return $this->redirectToRoute('read_paint', ['id' => $painting->getId()]);
        }

        return $this->render('main/edit.html.twig', [
            'form' => $form->createView(),
            'method' => 'Création',
        ]);
    }
}
