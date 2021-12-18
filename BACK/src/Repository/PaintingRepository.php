<?php

namespace App\Repository;

use App\Entity\Painting;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Painting|null find($id, $lockMode = null, $lockVersion = null)
 * @method Painting|null findOneBy(array $criteria, array $orderBy = null)
 * @method Painting[]    findAll()
 * @method Painting[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaintingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Painting::class);
    }

    // public function findAllCustom()
    // {
    //     $entityManager = $this->getEntityManager();

    //     $query = $entityManager->createQuery(
            // 'SELECT p, f, situation, size, t, c 
            // FROM App\Entity\Painting p
            // INNER JOIN p.frame f
            // INNER JOIN p.situation situation
            // INNER JOIN p.size size
            // INNER JOIN p.techniques t
            // INNER JOIN p.categories c'
    //     );
    
    //     return $query->getResult();
    // }

    /**
     * TODO: Faire des requêtes pour avoir plusieurs pages et pas tout sur une seule TODO:
     * Return all the paintings with custom request to decrease the total number of requests
     * Retourne toutes les peintures avec une requête custom pour diminuer le nombre de requêtes totales
     */
    public function findAllCustom()
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.frame', 'f')
            ->addSelect('f')
            ->innerJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->innerJoin('p.size', 'size')
            ->addSelect('size')
            ->innerJoin('p.techniques', 't')
            ->addSelect('t')
            ->innerJoin('p.categories', 'c')
            ->addSelect('c')
            ->setMaxResults(15)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * Return all the paintings of a specific category
     * Retourne toutes les peintures d'une catégorie spécifique
     *
     * @param [entity] $category
     */
    public function findByCategory($category)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            INNER JOIN p.frame f
            INNER JOIN p.situation situation
            INNER JOIN p.size size
            INNER JOIN p.techniques t
            INNER JOIN p.categories c
            WHERE c = :categ'

        )->setParameter('categ', $category);

        return $query->getResult();
    }

    /**
     * Return all the paintings of a specific type of framing
     * Retourne toutes les peintures d'un type d'encadrement
     *
     * @param [entity] $frame
     */
    public function findByFrame($frame)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            INNER JOIN p.frame f
            INNER JOIN p.situation situation
            INNER JOIN p.size size
            INNER JOIN p.techniques t
            INNER JOIN p.categories c
            WHERE f = :frame'

        )->setParameter('frame', $frame);

        return $query->getResult();
    }

    /**
     * Return all the paintings of a specific situation/collection
     * Retourne toutes les peintures d'une collection
     *
     * @param [entity] $situation
     */
    public function findBySituation($situation)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            INNER JOIN p.frame f
            INNER JOIN p.situation situation
            INNER JOIN p.size size
            INNER JOIN p.techniques t
            INNER JOIN p.categories c
            WHERE situation = :situation'

        )->setParameter('situation', $situation);

        return $query->getResult();
    }

    /**
     * Return all the paintings of a specific size
     * Retourne toutes les peintures d'un format spécifique
     *
     * @param [entity] $size
     */
    public function findBySize($size)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            INNER JOIN p.frame f
            INNER JOIN p.situation situation
            INNER JOIN p.size size
            INNER JOIN p.techniques t
            INNER JOIN p.categories c
            WHERE size = :size'

        )->setParameter('size', $size);

        return $query->getResult();
    }

    /**
     * Return all the paintings of a specific technique
     * Retourne toutes les peintures d'une technique spécifique
     *
     * @param [entity] $technique
     */
    public function findByTechnique($technique)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            INNER JOIN p.frame f
            INNER JOIN p.situation situation
            INNER JOIN p.size size
            INNER JOIN p.techniques t
            INNER JOIN p.categories c
            WHERE t = :technique'

        )->setParameter('technique', $technique);

        return $query->getResult();
    }

    // public function findByCategory($category)
    // {
    //     return $this->createQueryBuilder('p')
    //         ->andWhere('p.category = :cat')
    //         ->setParameter('cat', $category)
    //         ->orderBy('p.id', 'ASC')
    //         ->getQuery()
    //         ->getResult()
    //     ;
    // }

    // /**
    //  * @return Painting[] Returns an array of Painting objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Painting
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
