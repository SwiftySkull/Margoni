<?php

namespace App\Controller\Admin;

use App\Entity\Avis;
use App\Form\AvisType;
use App\Repository\AvisRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvisController extends AbstractController
{
    /**
     * @Route("/avis/browse", name="avis_browse", methods={"GET"})
     */
    public function browse(AvisRepository $avisRepository): Response
    {
        $allAvis = $avisRepository->findAll();

        return $this->render('avis/browse.html.twig', [
            'allAvis' => $allAvis,
        ]);
    }

    /**
     * @Route("/avis/read/{id<\d+>}", name="avis_read", methods={"GET"})
     */
    public function read(Avis $avis = null)
    {
        if (null === $avis) {
            throw $this->createNotFoundException('Oups ! Avis non trouvé.');
        }

        return $this->render('avis/read.html.twig', [
            'avis' => $avis,
        ]);
    }

    /**
     * @Route(
     *      "/avis/edit/{id<\d+>}",
     *      name="avis_edit",
     *      methods={"GET", "POST"},
     * )
     */
    public function edit(Avis $avis = null, EntityManagerInterface $em, Request $request, AvisRepository $avisRepository)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-avis', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if (null === $avis) {
            throw $this->createNotFoundException('Oups ! Avis non trouvé.');
        }

        $form = $this->createForm(AvisType::class, $avis);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
    
            if ($avis->getHomeAvis()) {
                $allAvis = $avisRepository->findAll();
                foreach ($allAvis as $value) {
                    $value->setHomeAvis(0);
                    $em->persist($value);
                }

                $avis->setHomeAvis(1);
            }  

            $em->flush();

            return $this->redirectToRoute('avis_browse');
        }

        return $this->render('avis/edit.html.twig', [
            'avis' => $avis,
            'form' => $form->createView(),
            'method' => 'Modification',
        ]);
    }

    /**
     * @Route("/avis/homepage/{id<\d+>}", name="avis_set_home_page", methods={"POST"})
     */
    public function setHomePageAvis(AvisRepository $avisRepository, Avis $avis, EntityManagerInterface $em): Response
    {
        $allAvis = $avisRepository->findAll();

        foreach ($allAvis as $value) {
            $value->setHomeAvis(0);
            $em->persist($value);
        }

        $avis->setHomeAvis(1);
        $em->flush();

        return $this->render('avis/browse.html.twig', [
            'allAvis' => $allAvis,
        ]);
    }

    /**
     * @Route(
     *      "/avis/add",
     *      name="avis_add",
     *      methods={"GET", "POST"},
     * )
     */
    public function add(EntityManagerInterface $em, Request $request, AvisRepository $avisRepository)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-avis', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        $avis = new Avis();
    
        $form = $this->createForm(AvisType::class, $avis);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($avis->getHomeAvis()) {
                $allAvis = $avisRepository->findAll();
                foreach ($allAvis as $value) {
                    $value->setHomeAvis(0);
                    $em->persist($value);
                }
            }           

            $em->persist($avis);
            $em->flush();

            return $this->redirectToRoute('avis_browse');
        }
    
        return $this->render('avis/edit.html.twig', [
            'form' => $form->createView(),
            'method' => 'Création',
        ]);
    }

    /**
     * @Route(
     *      "/avis/delete/{id<\d+>}",
     *      name="avis_delete",
     *      methods={"POST", "DELETE"},
     * )
     */
    public function delete(Avis $avis, $id, Request $request, EntityManagerInterface $em, AvisRepository $avisRepository)
    {
        if (null === $avis) {
            throw $this->createNotFoundException('Oups ! Avis non trouvé.');
        }
        
        $submittedToken = $request->request->get('token');

        if (!$this->isCsrfTokenValid('delete-avis', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if ($avis->getHomeAvis()) {
            $oneAvis = $avisRepository->find($avisRepository->findAll()[0]);
            $oneAvis->setHomeAvis(1);
            $em->persist($oneAvis);
        }  

        $em->remove($avis);
        $em->flush();

        return $this->redirectToRoute('avis_browse');
    }
}
