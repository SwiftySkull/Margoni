<?php

namespace App\Controller\Admin;

use App\Entity\Painting;
use App\Entity\Picture;
use App\Form\PaintingType;
use App\Service\PagesNavigator;
use App\Repository\CategoryRepository;
use App\Repository\PaintingRepository;
use App\Repository\PictureRepository;
use Symfony\Component\Filesystem\Path;
use App\Repository\TechniqueRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    private $pagesNavigator;

    public function __construct(PagesNavigator $pagesNavigator)
    {
        $this->pagesNavigator = $pagesNavigator;
    }

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
        $this->pagesNavigator->setAllEntries($paintingRepository->countAll());

        $paintings = $paintingRepository->findAllLimited();

        $totalPages = $this->pagesNavigator->getTotalPages(25);

        return $this->render('main/home.html.twig', [
            'paintings' => $paintings,
            'pages' => $this->pagesNavigator->getMinMax(),
            'totalPages' => $totalPages,
            'previousPage' => $this->pagesNavigator->getPreviousPage(),
            'nextPage' => $this->pagesNavigator->getNextPage(),
        ]);
    }

    /**
     * @Route("/page/{id<\d+>}", name="home_plus", methods={"GET"})
     */
    public function homePlus(PaintingRepository $paintingRepository, $id)
    {
        $this->pagesNavigator->setAllEntries($paintingRepository->countAll());

        $pageId = $this->pagesNavigator->getPageId($id);
        $slice = $this->pagesNavigator->getSlice($pageId);

        $paintings = $paintingRepository->findAllLimited($slice);

        $totalPages = $this->pagesNavigator->getTotalPages();
        $pages = $this->pagesNavigator->getMinMax($pageId);
        $previousPage = $this->pagesNavigator->getPreviousPage($pageId);
        $nextPage = $this->pagesNavigator->getNextPage($pageId);

        return $this->render('main/home.html.twig', [
            'paintings' => $paintings,
            'pages' => $pages,
            'totalPages' => $totalPages,
            'previousPage' => $previousPage,
            'nextPage' => $nextPage,
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
    public function read(Painting $painting = null, PictureRepository $picture)
    {
        if (null === $painting) {
            throw $this->createNotFoundException('Oups ! Tableau non trouvé.'); 
        }


        if (1000 == $painting->getId()) {
            $test = $picture->find(3);
            dump($test);

            $imgURL = 'data:image/jpeg;base64,'.$test->getImgDesc();

            dump($test->getFile());
            return $this->render('main/read.html.twig', [
                'painting' => $painting,
                'testPicture' => $imgURL,
            ]);
    
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

        $filesystem = new Filesystem();
        // try {
        //     $filesystem->mkdir('/images/', 0777);
        //     $filesystem->copy(file_get_contents($request->files->get('painting')['picture']), '/images/');
        // } catch (IOExceptionInterface $exception) {
        //     echo "An error occurred while creating your directory at ".$exception->getPath();
        // }

        
        if ($form->isSubmitted() && $form->isValid()) {
            // dump($filesystem);
            // $filesystem->copy()
        
            // $filesystem->dumpFile('picture.jpg', $request->files->get('painting')['picture']);
            // $ret = false;
            // $img_blob = '';
            // $img_taille = 0;
            // $img_type = '';
            // $img_nom = '';
            // $taille_max = 250000;
            // $ret = is_uploaded_file($request->files->get('painting')['picture']);

            // dump($ret);
            $file = $request->files->get('painting')['picture']->getClientOriginalName();
            dump($file);
            // dump($_FILES['painting']['name']['picture']);
            // dump($request->files->get('painting')['picture']->getType());
        
            // if (!$ret) {
            //     echo "Problème de transfert";
            //     return false;
            // } else {
            //     // Le fichier a bien été reçu
            $img_taille = $request->files->get('painting')['picture']->getSize();
            
            //     if ($img_taille > $taille_max) {
            //         echo "Trop gros !";
            //         return false;
            //     }

            $img_type = $request->files->get('painting')['picture']->getType();
            $img_nom  = $request->files->get('painting')['picture']->getFilename();

            $img_blob = file_get_contents($request->files->get('painting')['picture']);

            //     dump('blob');
            //     dump($img_blob);
            // }
        
        
            $picture = new Picture();
            $picture->setTitle($request->files->get('painting')['picture']->getClientOriginalName());
            $picture->setTaille($img_taille);
            $picture->setFile($img_blob);
            $picture->setType($img_type);
            $picture->setImgDesc(base64_encode($img_blob));

            // dd($picture);
            $em->persist($picture);
        
            // if ($form->isSubmitted() && $form->isValid()) {
            //     $em->persist($painting);
            $em->flush();
        }
        //     return $this->redirectToRoute('read_paint', ['id' => $painting->getId()]);
        // }

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
