<?php

namespace App\Controller;

use App\Entity\Situation;
use App\Form\SituationType;
use App\Repository\PaintingRepository;
use App\Repository\SituationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Controller which handles all the situations/collections research,
 * and also handles the add/edit/delete of the situation/collection
 * 
 * Controlleur qui se charge de toutes les recherches par collection
 * ainsi que les ajout/modification/suppression des collections
 * 
 * @Route("/situation", name="situation_")
 */
class SituationController extends AbstractController
{
    /**
     * Endpoint to show all the situations/collections
     * Route pour montrer toutes les collections
     * 
     * @Route(
     *      "/browse",
     *      name="browse",
     *      methods={"GET"},
     * )
     */
    public function browse(SituationRepository $situationRepository): Response
    {
        $situations = $situationRepository->findAll();

        return $this->render('situation/browse.html.twig', [
            'situations' => $situations,
        ]);
    }

    /**
     * Endpoint to show all the paintings of one situation/collection
     * Route pour montrer toutes les peintures d'une collection
     * 
     * @Route(
     *      "/read/{id<\d+>}",
     *      name="read",
     *      methods={"GET"},
     * )
     */
    public function read(Situation $situation = null, PaintingRepository $paintingRepository)
    {
        if (null === $situation) {
            throw $this->createNotFoundException('Oups ! Type d\'encadrement non trouvé.');
        }

        $paintings = $paintingRepository->findBySituation($situation);

        // dd($paintings);

        return $this->render('situation/read.html.twig', [
            'paintings' => $paintings,
            'situation' => $situation,
        ]);
    }

    /**
     * Endpoint to update the name of a situation/collection
     * Route pour modifier le nom d'une collection
     * 
     * @Route(
     *      "/edit/{id<\d+>}",
     *      name="edit",
     *      methods={"GET", "POST"},
     * )
     */
    public function edit(Situation $situation = null, EntityManagerInterface $em, Request $request)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if (null === $situation) {
            throw $this->createNotFoundException('Oups ! Type d\'encadrement non trouvé.');
        }

        $form = $this->createForm(SituationType::class, $situation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
    
            $em->flush();

            return $this->redirectToRoute('situation_browse');
        }

        return $this->render('situation/edit.html.twig', [
            'situation' => $situation,
            'form' => $form->createView(),
            'method' => 'Modification',
        ]);
    }

    /**
     * Endpoint to add a new situation/collection
     * Route pour ajouter une nouvelle collection
     * 
     * @Route(
     *      "/add",
     *      name="add",
     *      methods={"GET", "POST"},
     * )
     */
    public function add(EntityManagerInterface $em, Request $request)
    {
        $submittedToken = $request->request->get('token');
    
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        $situation = new Situation();
    
        $form = $this->createForm(SituationType::class, $situation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($situation);
            $em->flush();

            return $this->redirectToRoute('situation_browse');
        }
    
        return $this->render('situation/edit.html.twig', [
            'form' => $form->createView(),
            'method' => 'Création',
        ]);
    }

    /**
     * Endpoint to delete a situation/collection
     * Route pour supprimer une collection
     * 
     * @Route(
     *      "/delete/{id<\d+>}",
     *      name="delete",
     *      methods={"POST", "DELETE"},
     * )
     */
    public function delete(Situation $situation = null, EntityManagerInterface $em, Request $request)
    {
        if (null === $situation) {
            throw $this->createNotFoundException('Oups ! Type d\'encadrement non trouvé.');
        }
        
        $submittedToken = $request->request->get('token');

        if (!$this->isCsrfTokenValid('delete-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        $em->remove($situation);
        $em->flush();

        return $this->redirectToRoute('situation_browse');
    }

}