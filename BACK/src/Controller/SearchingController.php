<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/searching", name="searching_")
 */
class SearchingController extends AbstractController
{
    /**
     * @Route(
     *      "/category",
     *      name="category",
     *      methods={"GET"},
     * )
     */
    public function category(): Response
    {
        return $this->render('main/searching/category.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/collection",
     *      name="collection",
     *      methods={"GET"},
     * )
     */
    public function collection(): Response
    {
        return $this->render('main/searching/collection.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/frame",
     *      name="frame",
     *      methods={"GET"},
     * )
     */
    public function frame(): Response
    {
        return $this->render('main/searching/frame.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/height",
     *      name="height",
     *      methods={"GET"},
     * )
     */
    public function height(): Response
    {
        return $this->render('main/searching/height.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/size",
     *      name="size",
     *      methods={"GET"},
     * )
     */
    public function size(): Response
    {
        return $this->render('main/searching/size.html.twig', [
            
        ]);
    }

    /**
     * @Route(
     *      "/technique",
     *      name="technique",
     *      methods={"GET"},
     * )
     */
    public function technique(): Response
    {
        return $this->render('main/searching/technique.html.twig', [
            
        ]);
    }
}
