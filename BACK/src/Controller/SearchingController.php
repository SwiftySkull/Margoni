<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\PaintingRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/searching", name="searching_")
 */
class SearchingController extends AbstractController
{

    /**
     * @Route(
     *      "/height",
     *      name="height_browse",
     *      methods={"GET"},
     * )
     */
    public function height(): Response
    {
        return $this->render('height/browse.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/size",
     *      name="size_browse",
     *      methods={"GET"},
     * )
     */
    public function size(): Response
    {
        return $this->render('size/browse.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/technique",
     *      name="technique_browse",
     *      methods={"GET"},
     * )
     */
    public function technique(): Response
    {
        return $this->render('technique/browse.html.twig', [
            
        ]);
    }
}