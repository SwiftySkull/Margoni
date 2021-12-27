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
    private $limitPerPage;

    public function __construct(ManagerRegistry $registry, $limitPerPage)
    {
        parent::__construct($registry, Painting::class);
        $this->limitPerPage = $limitPerPage;
    }

    /**
     * Return all the paintings with custom request to decrease the total number of requests
     * 
     * Retourne toutes les peintures avec une requête custom pour diminuer le nombre de requêtes totales
     * 
     * @param integer $offset
     */
    public function findAllLimited(int $offset = 0)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.frame', 'f')
            ->addSelect('f')
            ->leftJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->leftJoin('p.size', 'size')
            ->addSelect('size')
            // ->leftJoin('p.techniques', 't')
            // ->addSelect('t')
            // ->leftJoin('p.categories', 'c')
            // ->addSelect('c')
            ->leftJoin('p.picture', 'pic')
            ->addSelect('pic')
            ->orderBy('p.id')
            ->setFirstResult($offset)
            ->setMaxResults($this->limitPerPage)
            ->getQuery()
            ->getResult()
        ;

        return $qb;
    }

    /**
     * Get the number of results
     * 
     * Récupère le nombre de résultat
     */
    public function countAll()
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    /**
     * Return all the paintings with custom request to decrease the total number of requests
     * Retourne toutes les peintures avec une requête custom pour diminuer le nombre de requêtes totales
     */
    public function findAllCustom()
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            LEFT JOIN p.frame f
            LEFT JOIN p.situation situation
            LEFT JOIN p.size size
            LEFT JOIN p.techniques t
            LEFT JOIN p.categories c'

        );

        return $query->getResult();
    }


    /**
     * Return all the paintings of a specific category
     * Retourne toutes les peintures d'une catégorie spécifique
     *
     * @param entity $category
     */
    public function findByCategory($category)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            LEFT JOIN p.frame f
            LEFT JOIN p.situation situation
            LEFT JOIN p.size size
            LEFT JOIN p.techniques t
            LEFT JOIN p.categories c
            WHERE c = :categ'

        )->setParameter('categ', $category);

        return $query->getResult();
    }

    /**
     * Return all the paintings of a category with custom request to decrease the total number of requests, also set an offset instruction
     * 
     * Retourne toutes les peintures d'une catégorie avec une requête custom pour diminuer le nombre de requêtes totales, ajoute aussi une instruction offset
     *
     * @param entity $category
     * @param integer $offset
     */
    public function findCategLimited($category, int $offset = 0)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.frame', 'f')
            ->addSelect('f')
            ->leftJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->leftJoin('p.size', 'size')
            ->addSelect('size')
            ->leftJoin('p.techniques', 't')
            ->addSelect('t')
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->where('c = :cat')
            ->setParameter('cat', $category)
            ->orderBy('p.id')
            ->setFirstResult($offset)
            ->setMaxResults($this->limitPerPage)
            ->getQuery()
            ->getResult()
        ;

        return $qb;
    }

    /**
     * Get the number of results for a category
     * 
     * Récupère le nombre de résultat pour une catégorie
     * 
     * @param entity $category
     */    
    public function countByCateg($category)
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->leftJoin('p.categories', 'c')
            ->where('c = :cat')
            ->setParameter('cat', $category)
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    /**
     * Return all the paintings of a specific type of framing
     * Retourne toutes les peintures d'un type d'encadrement
     *
     * @param entity $frame
     */
    public function findByFrame($frame)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            LEFT JOIN p.frame f
            LEFT JOIN p.situation situation
            LEFT JOIN p.size size
            LEFT JOIN p.techniques t
            LEFT JOIN p.categories c
            WHERE f = :frame'

        )->setParameter('frame', $frame);

        return $query->getResult();
    }

    /**
     * Get the number of results for a frame
     * 
     * Récupère le nombre de résultat pour encadrement
     * 
     * @param entity $frame
     */
    public function countByFrame($frame)
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->leftJoin('p.frame', 'f')
            ->where('f = :frame')
            ->setParameter('frame', $frame)
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    /**
     * Return all the paintings of a type of frame with custom request to decrease the total number of requests, also set an offset instruction
     * 
     * Retourne toutes les peintures d'un type d'encadrement avec une requête custom pour diminuer le nombre de requêtes totales, ajoute aussi une instruction offset
     *
     * @param entity $frame
     * @param integer $offset
     */
    public function findFrameLimited($frame, int $offset = 0)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.frame', 'f')
            ->addSelect('f')
            ->leftJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->leftJoin('p.size', 'size')
            ->addSelect('size')
            ->leftJoin('p.techniques', 't')
            ->addSelect('t')
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->where('f = :frame')
            ->setParameter('frame', $frame)
            ->orderBy('p.id')
            ->setFirstResult($offset)
            ->setMaxResults($this->limitPerPage)
            ->getQuery()
            ->getResult()
        ;

        return $qb;
    }

    /**
     * Return all the paintings of a specific situation/collection
     * Retourne toutes les peintures d'une collection
     *
     * @param entity $situation
     */
    public function findBySituation($situation)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            LEFT JOIN p.frame f
            LEFT JOIN p.situation situation
            LEFT JOIN p.size size
            LEFT JOIN p.techniques t
            LEFT JOIN p.categories c
            WHERE situation = :situation'

        )->setParameter('situation', $situation);

        return $query->getResult();
    }

    /**
     * Get the number of results for a situation
     * 
     * Récupère le nombre de résultat pour une situation/collection
     * 
     * @param entity $situation
     */
    public function countBySituation($situation)
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->leftJoin('p.situation', 's')
            ->where('s = :situation')
            ->setParameter('situation', $situation)
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    /**
     * Return all the paintings of a situation with custom request to decrease the total number of requests, also set an offset instruction
     * 
     * Retourne toutes les peintures d'une collection/situation avec une requête custom pour diminuer le nombre de requêtes totales, ajoute aussi une instruction offset
     *
     * @param entity $situation
     * @param integer $offset
     */
    public function findSituationLimited($situation, int $offset = 0)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.frame', 'f')
            ->addSelect('f')
            ->leftJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->leftJoin('p.size', 'size')
            ->addSelect('size')
            ->leftJoin('p.techniques', 't')
            ->addSelect('t')
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->where('sit = :situation')
            ->setParameter('situation', $situation)
            ->orderBy('p.id')
            ->setFirstResult($offset)
            ->setMaxResults($this->limitPerPage)
            ->getQuery()
            ->getResult()
        ;

        return $qb;
    }

    /**
     * Return all the paintings of a specific size
     * Retourne toutes les peintures d'un format spécifique
     *
     * @param entity $size
     */
    public function findBySize($size)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            LEFT JOIN p.frame f
            LEFT JOIN p.situation situation
            LEFT JOIN p.size size
            LEFT JOIN p.techniques t
            LEFT JOIN p.categories c
            WHERE size = :size'

        )->setParameter('size', $size);

        return $query->getResult();
    }

    /**
     * Get the number of results for a siza
     * 
     * Récupère le nombre de résultat pour un format
     * 
     * @param entity $size
     */
    public function countBySize($size)
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->leftJoin('p.size', 's')
            ->where('s = :size')
            ->setParameter('size', $size)
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    /**
     * Return all the paintings of a size with custom request to decrease the total number of requests, also set an offset instruction
     * 
     * Retourne toutes les peintures d'un certain format avec une requête custom pour diminuer le nombre de requêtes totales, ajoute aussi une instruction offset
     *
     * @param entity $size
     * @param integer $offset
     */
    public function findSizeLimited($size, int $offset = 0)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.frame', 'f')
            ->addSelect('f')
            ->leftJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->leftJoin('p.size', 'size')
            ->addSelect('size')
            ->leftJoin('p.techniques', 't')
            ->addSelect('t')
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->where('size = :size')
            ->setParameter('size', $size)
            ->orderBy('p.id')
            ->setFirstResult($offset)
            ->setMaxResults($this->limitPerPage)
            ->getQuery()
            ->getResult()
        ;

        return $qb;
    }

    /**
     * Return all the paintings of a specific technique
     * Retourne toutes les peintures d'une technique spécifique
     *
     * @param entity $technique
     */
    public function findByTechnique($technique)
    {
        $entityManager = $this->getEntityManager();
        
        $query = $entityManager->createQuery(
            'SELECT p, f, situation, size, t, c 
            FROM App\Entity\Painting p
            LEFT JOIN p.frame f
            LEFT JOIN p.situation situation
            LEFT JOIN p.size size
            LEFT JOIN p.techniques t
            LEFT JOIN p.categories c
            WHERE t = :technique'

        )->setParameter('technique', $technique);

        return $query->getResult();
    }

    /**
     * Get the number of results for a technique
     * 
     * Récupère le nombre de résultat pour une technique
     * 
     * @param entity $technique
     */
    public function countByTechnique($technique)
    {
        return $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->leftJoin('p.techniques', 't')
            ->where('t = :t')
            ->setParameter('t', $technique)
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    /**
     * Return all the paintings of a technique with custom request to decrease the total number of requests, also set an offset instruction
     * 
     * Retourne toutes les peintures d'une technique avec une requête custom pour diminuer le nombre de requêtes totales, ajoute aussi une instruction offset
     * 
     * @param entity $technique
     * @param integer $offset
     */
    public function findTechniqueLimited($technique, int $offset = 0)
    {
        $qb = $this->createQueryBuilder('p')
            ->leftJoin('p.frame', 'f')
            ->addSelect('f')
            ->leftJoin('p.situation', 'sit')
            ->addSelect('sit')
            ->leftJoin('p.size', 'size')
            ->addSelect('size')
            ->leftJoin('p.techniques', 't')
            ->addSelect('t')
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->where('t = :technique')
            ->setParameter('technique', $technique)
            ->orderBy('p.id')
            ->setFirstResult($offset)
            ->setMaxResults($this->limitPerPage)
            ->getQuery()
            ->getResult()
        ;

        return $qb;
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
