<?php

namespace App\Controller\Api;

use App\Entity\Painting;
use App\Service\PagesNavigator;
use App\Repository\PaintingRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PaintingController extends AbstractController
{
    private $pagesNavigator;

    public function __construct(PagesNavigator $pagesNavigator)
    {
        $this->pagesNavigator = $pagesNavigator;
    }

    /**
     * @Route("/api/paintings", name="api_paintings_browse", methods={"GET"})
     */
    public function browse(PaintingRepository $paintingRepository): Response
    {
        $this->pagesNavigator->setAllEntries($paintingRepository->countAll());

        $paintings = $paintingRepository->findAllLimited();

        $total = $paintingRepository->countAll();

        $results = [['total results' => $total], $paintings];

        return $this->json($results, 200, [], ['groups' => 'paintings_browse']);
    }

    /**
     * @Route("/api/paintings/page/{page<\d+>}", name="api_paintings_browse_plus", methods={"GET"})
     */
    public function browsePlus(PaintingRepository $paintingRepository, $page)
    {
        $this->pagesNavigator->setAllEntries($paintingRepository->countAll());

        $pageId = $this->pagesNavigator->getPageId($page);
        $slice = $this->pagesNavigator->getSlice($pageId);

        $paintings = $paintingRepository->findAllLimited($slice);

        $total = $paintingRepository->countAll();

        $results = [['total results' => $total], $paintings];

        return $this->json($results, 200, [], ['groups' => 'paintings_browse']);
    }

    /**
     * @Route("/api/painting/{id<\d+>}", name="api_painting_read", methods={"GET"})
     */
    public function read(Painting $painting = null)
    {
        if (null === $painting) {
            $message = [
                'status' => Response::HTTP_NOT_FOUND,
                'error' => 'Tableau non trouvé.',
            ];

            return $this->json($message, Response::HTTP_NOT_FOUND);
        }

        return $this->json($painting, 200, [], ['groups' => ['paintings_browse', 'painting_read']]);
    }
}
