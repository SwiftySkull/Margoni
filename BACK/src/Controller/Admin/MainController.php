<?php

namespace App\Controller\Admin;

use App\Entity\Painting;
use App\Entity\Picture;
use App\Form\PaintingType;
use App\Repository\CategoryRepository;
use App\Repository\PaintingRepository;
use App\Repository\PictureRepository;
use App\Repository\TechniqueRepository;
use App\Service\PagesNavigator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    private $pagesNavigator;

    public function __construct(PagesNavigator $pagesNavigator)
    {
        $this->pagesNavigator = $pagesNavigator;
    }

    /**
     * Home page with all the paintigs, juste for a try
     * 
     * @Route(
     *      "/",
     *      name="home",
     *      methods={"GET"},
     * )
     */
    public function home(PaintingRepository $paintingRepository): Response
    {
        $this->pagesNavigator->setAllEntries($paintingRepository->countAll());

        $paintings = $paintingRepository->findAllLimited();

        $totalPages = $this->pagesNavigator->getTotalPages();

        return $this->render('main/home.html.twig', [
            'paintings' => $paintings,
            'pages' => $this->pagesNavigator->getMinMax(),
            'totalPages' => $totalPages,
            'previousPage' => $this->pagesNavigator->getPreviousPage(),
            'nextPage' => $this->pagesNavigator->getNextPage(),
            'count' => $paintingRepository->countAll(),
        ]);
    }

    /**
     * @Route("/page/{id<\d+>}", name="home_plus", methods={"GET"})
     */
    public function homePlus(PaintingRepository $paintingRepository, $id)
    {
        $this->pagesNavigator->setAllEntries($paintingRepository->countAll());

        $pageId = $this->pagesNavigator->getPageId($id);
        $slice = $this->pagesNavigator->getSlice($pageId);

        $paintings = $paintingRepository->findAllLimited($slice);

        $totalPages = $this->pagesNavigator->getTotalPages();
        $pages = $this->pagesNavigator->getMinMax($pageId);
        $previousPage = $this->pagesNavigator->getPreviousPage($pageId);
        $nextPage = $this->pagesNavigator->getNextPage($pageId);

        return $this->render('main/home.html.twig', [
            'paintings' => $paintings,
            'pages' => $pages,
            'totalPages' => $totalPages,
            'previousPage' => $previousPage,
            'nextPage' => $nextPage,
            'count' => $paintingRepository->countAll(),
        ]);
    }

    /**
     * Description of just one painting
     * 
     * @Route(
     *      "/paint/read/{id<\d+>}",
     *      name="read_paint",
     *      methods={"GET"},
     * )
     */
    public function read(Painting $painting = null)
    {
        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        return $this->render('main/read.html.twig', [
            'painting' => $painting,
        ]);
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
    public function edit(Painting $painting = null, $id, Request $request, EntityManagerInterface $em, TechniqueRepository $techniqueRepository, CategoryRepository $categoryRepository, PictureRepository $pictureRepository)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        $form = $this->createForm(PaintingType::class, $painting);

        $oldDbName = $painting->getDbName();

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
    public function add(EntityManagerInterface $em, Request $request)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        $painting = new Painting();

        $form = $this->createForm(PaintingType::class, $painting);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $picture = new Picture();
            
            $pictureTitle = preg_filter('/.(jpg|JPG|PNG|png|JPEG|jpeg)/', '', $request->files->get('painting')['picture']->getClientOriginalName());
            $picture->setTitle($pictureTitle);
            $picture->setPathname($request->files->get('painting')['picture']->getClientOriginalName());
            $picture->setFile(base64_encode(file_get_contents($request->files->get('painting')['picture'])));
            $em->persist($picture);

            if (null == $painting->getDbName()) {
                $painting->setDbName($pictureTitle);                
            }

            $painting->setPicture($picture);
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
     * @Route("/paint/delete/{id<\d+>}", name="paint_delete", methods={"POST", "DELETE"})
     */
    public function delete(Painting $painting, Request $request, EntityManagerInterface $em)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('delete-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        $em->remove($painting);
        $em->flush();

        return $this->redirectToRoute('home');
    }
}
