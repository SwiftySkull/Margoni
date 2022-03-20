<?php

namespace App\Controller\Admin\MainController;

use App\Entity\Painting;
use App\Entity\Picture;
use App\Form\PaintingType;
use App\Repository\CategoryRepository;
use App\Repository\PaintingRepository;
use App\Repository\PictureRepository;
use App\Repository\SizeRepository;
use App\Repository\TechniqueRepository;
use App\Service\FormatConversion;
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
    public function home(PaintingRepository $paintingRepository)
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
    public function read(Painting $painting = null, PaintingRepository $pr)
    {
        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        $next = $pr->findNext($painting->getId());
        $previous = $pr->findPrevious($painting->getId());

        return $this->render('main/read.html.twig', [
            'painting' => $painting,
            'next' => $next,
            'previous' => $previous,
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

    /**
     * @Route("/all-paintings/page/{page}", name="all_paintings", methods={"GET", "POST"})
     */
    public function allPaintings(PaintingRepository $pr, $page)
    {
        $this->pagesNavigator->setAllEntries($pr->countAll());

        $pageId = $this->pagesNavigator->getPageId($page);
        $slice = $this->pagesNavigator->getSlice($pageId, 50);

        $paintings = $pr->findHundred($slice);

        $totalPages = $this->pagesNavigator->getTotalPages(50);
        $pages = $this->pagesNavigator->getMinMax($pageId);
        $previousPage = $this->pagesNavigator->getPreviousPage($pageId);
        $nextPage = $this->pagesNavigator->getNextPage($pageId);
        // dd($totalPages);
        return $this->render('all/all.html.twig', [
            'paintings' => $paintings,
            'page' => $page,
            'pages' => $pages,
            'totalPages' => $totalPages,
            'previousPage' => $previousPage,
            'nextPage' => $nextPage,
            'count' => $pr->countAll(),
        ]);
    }

    /**
     * @Route("/all-paintings-edit/{id}/page/{page}", name="all_paintings_edit", methods={"GET", "POST"})
     */
    public function displayPaintingOnAll(Painting $painting = null, EntityManagerInterface $em, $page)
    {
        $painting->setWebDisplay(!$painting->getWebDisplay());
        $em->flush();

        return $this->redirectToRoute('all_paintings', ['page' => $page]);
    }

    // /**
    //  * @Route("/reset", name="reset", methods={"GET", "POST"})
    //  */
    // public function resetPictures(EntityManagerInterface $em, PictureRepository $pr)
    // {
    //     $pictures = $pr->resetPictures();

    //     foreach ($pictures as $key => $value) {
    //         $value->setPathname('uploads/HuileSurToile/'.$value->getPathname());
    //     }
    //     $em->flush();

    //     return $this->redirectToRoute('home');
    // }
}
