<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Service\PagesNavigator;
use App\Repository\CategoryRepository;
use App\Repository\PaintingRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    private $pagesNavigator;

    public function __construct(PagesNavigator $pagesNavigator)
    {
        $this->pagesNavigator = $pagesNavigator;
    }

    /**
     * @Route("/api/categories", name="api_categories_browse", methods={"GET"})
     */
    public function browse(CategoryRepository $categoryRepository): Response
    {
        $categories = $categoryRepository->findAllAsc();

        return $this->json($categories, 200, [], ['groups' => 'categories_browse']);
    }

    /**
     * @Route("/api/category/{id<\d+>}", name="api_category_read_main", methods={"GET"})
     * @Route("/api/category/{id<\d+>}/page/{page<\d+>}", name="api_category_read", methods={"GET"})
     */
    public function read(Category $category = null, PaintingRepository $paintingRepository, $page = 0)
    {
        if (null === $category) {
            $message = [
                'status' => Response::HTTP_NOT_FOUND,
                'error' => 'Catégorie non trouvée.',
            ];

            return $this->json($message, Response::HTTP_NOT_FOUND);
        }

        $this->pagesNavigator->setAllEntries($paintingRepository->countByCateg($category));

        $total = $paintingRepository->countByCateg($category);

        $pageId = $this->pagesNavigator->getPageId($page);
        $slice = $this->pagesNavigator->getSlice($pageId);

        $paintings = $paintingRepository->findCategLimited($category, $slice);

        $results = [$category, ['total results' => $total], $paintings];

        return $this->json($results, 200, [], ['groups' => ['paintings_browse', 'categories_browse']]);
    }

    /**
     * @Route("/api/getone/category", name="api_category_get_one_element", methods={"GET"})
     */
    public function getOneFromCategory(CategoryRepository $categoryRepository, PaintingRepository $paintingRepository)
    {
        $categories = $categoryRepository->findAll();

        $shuffledPictures = [];

        for ($i=0; $i < count($categories); $i++) { 
            $random = $paintingRepository->getOneFromCategory($categories[$i]);
            shuffle($random);
            $shuffledPictures[] = $random[0] ?? null;
        }

        return $this->json($shuffledPictures, 200, [], ['groups' => ['paintings_browse', 'categories_browse']]);
    }
}
