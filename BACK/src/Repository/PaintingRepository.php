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
    //         'SELECT p, f, situation, size, t, c 
    //         FROM App\Entity\Painting p
    //         INNER JOIN p.frame f
    //         INNER JOIN p.situation situation
    //         INNER JOIN p.size size
    //         INNER JOIN p.techniques t
    //         INNER JOIN p.categories c'
    //     );
    
    //     return $query->getResult();
    // }

    public function findAllCustom()
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.frame', 'f')
            ->innerJoin('p.situation', 'situation')
            ->innerJoin('p.size', 'size')
            ->innerJoin('p.techniques', 't')
            ->innerJoin('p.categories', 'c')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }

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
