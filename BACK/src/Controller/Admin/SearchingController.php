<?php

namespace App\Controller\Admin;

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
}
