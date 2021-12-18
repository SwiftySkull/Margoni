<?php

namespace App\Controller;

use App\Entity\Painting;
use App\Form\PaintingType;
use App\Repository\CategoryRepository;
use App\Repository\PaintingRepository;
use App\Repository\TechniqueRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    /**
     * Home page with all the paintigs, juste for a try
     * 
     * @Route(
     *      "/",
     *      name="home",
     *      methods={"GET"},
     * )
     */
    public function home(PaintingRepository $paintingRepository): Response
    {
        $paintings = $paintingRepository->findAllCustom();

        shuffle($paintings);

        return $this->render('main/home.html.twig', [
            'paintings' => $paintings,
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
    public function read(Painting $painting = null)
    {
        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        return $this->render('main/read.html.twig', [
            'painting' => $painting,
        ]);
    }

    /**
     * TODO: Créer la récupération des informations d'une photo TODO:
     * Form to edit the informations of a painting
     * 
     * @Route(
     *      "/paint/edit/{id<\d+>}",
     *      name="paint_edit",
     *      methods={"GET", "POST"},
     * )
     */
    public function edit(Painting $painting = null, $id, Request $request, EntityManagerInterface $em, TechniqueRepository $techniqueRepository, CategoryRepository $categoryRepository)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }

        $form = $this->createForm(PaintingType::class, $painting);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $painting->setPicture($form->get('picture')->getData()->getPathName());
            for ($i=0; $i < count($form->get('technique')->getData()); $i++) {
                $technique = $techniqueRepository->find($form->get('technique')->getData()[$i]);
                $painting->addTechniques($technique);
            }

            for ($i=0; $i < count($form->get('categories')->getData()); $i++) { 
                $category = $categoryRepository->find($form->get('categories')->getData()[$i]);
                $painting->addCategories($category);
            }

            $em->flush();

            return $this->redirectToRoute('read_paint', ['id' => $id]);
        }

        return $this->render('main/edit.html.twig', [
            'painting' => $painting,
            'method' => 'Modification',
            'form' => $form->createView(),
        ]);
    }

    /**
     * TODO: Récupérer les informations d'une photo TODO:
     * 
     * @Route("/paint/add", name="paint_add", methods={"POST", "GET"})
     */
    public function add(EntityManagerInterface $em, Request $request)
    {
        $submittedToken = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $submittedToken)) {
            throw $this->createAccessDeniedException('Action non autorisée !!!');
        }

        $painting = new Painting();

        $form = $this->createForm(PaintingType::class, $painting);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($painting);
            $em->flush();

            return $this->redirectToRoute('read_paint', ['id' => $painting->getId()]);
        }

        return $this->render('technique/edit.html.twig', [
            'form' => $form->createView(),
            'method' => 'Création',
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
}
