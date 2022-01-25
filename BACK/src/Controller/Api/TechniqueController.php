<?php

namespace App\Controller\Api;

use App\Entity\Technique;
use App\Service\PagesNavigator;
use App\Repository\PaintingRepository;
use App\Repository\TechniqueRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TechniqueController extends AbstractController
{
    private $pagesNavigator;

    public function __construct(PagesNavigator $pagesNavigator)
    {
        $this->pagesNavigator = $pagesNavigator;
    }

    /**
     * @Route("/api/techniques", name="api_techniques_browse", methods={"GET"})
     */
    public function browse(TechniqueRepository $techniqueRepository): Response
    {
        $techniques = $techniqueRepository->findAllAsc();

        return $this->json($techniques, 200, [], ['groups' => 'techniques_browse']);
    }

    /**
     * @Route("/api/technique/{id<\d+>}", name="api_technique_read_main", methods={"GET"})
     * @Route("/api/technique/{id<\d+>}/page/{page<\d+>}", name="api_technique_read", methods={"GET"})
     */
    public function read(Technique $technique = null, PaintingRepository $paintingRepository, $page = 0)
    {
        if (null === $technique) {
            $message = [
                'status' => Response::HTTP_NOT_FOUND,
                'error' => 'Technique non trouvée.',
            ];

            return $this->json($message, Response::HTTP_NOT_FOUND);
        }

        $this->pagesNavigator->setAllEntries($paintingRepository->countByTechnique($technique));

        $total = $paintingRepository->countByTechnique($technique);

        $pageId = $this->pagesNavigator->getPageId($page);
        $slice = $this->pagesNavigator->getSlice($pageId);

        $paintings = $paintingRepository->findTechniqueLimited($technique, $slice);

        $results = [$technique, ['total results' => $total], $paintings];

        return $this->json($results, 200, [], ['groups' => ['paintings_browse', 'techniques_browse']]);
    }

    /**
     * @Route("/api/techniquebytype/{type}", name="api_technique_by_type", methods={"GET"})
     */
    public function getTechniqueByType(Technique $technique = null, $type, TechniqueRepository $techniqueRepository)
    {
        $technique = $techniqueRepository->findByType($type);

        if (null === $technique) {
            $message = [
                'status' => Response::HTTP_NOT_FOUND,
                'error' => 'Technique non trouvée.',
            ];

            return $this->json($message, Response::HTTP_NOT_FOUND);
        }

        return $this->json($technique, 200, [], ['groups' => ['techniques_browse']]);
    }
}
