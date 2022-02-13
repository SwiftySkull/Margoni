<?php

namespace App\Controller\Api;

use App\Repository\AvisRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvisController extends AbstractController
{
    /**
     * @Route("/api/avis/browse", name="api_avis_browse", methods={"GET"})
     */
    public function browse(AvisRepository $avisRepository): Response
    {
        $allAvis = $avisRepository->findAllDesc();

        return $this->json($allAvis, 200, [], ['groups' => 'avis_browse']);
    }

    /**
     * @Route("/api/avis/home", name="api_avis_home", methods={"GET"})
     */
    public function homeAvis(AvisRepository $avisRepository)
    {
        $homeAvis = $avisRepository->findHomeAvis();

        return $this->json($homeAvis, 200, [], ['groups' => 'avis_browse']);
    }
}
