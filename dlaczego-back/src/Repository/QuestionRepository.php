<?php

namespace App\Repository;

use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Question::class);
    }

    public function getAll()
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery('
            SELECT q.id, q.content 
            FROM App\Entity\Question q 
            ORDER BY q.id DESC
        ');
        return $query->getArrayResult();
    }

    public function getById($id)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery('
            SELECT q.id, q.content, u.id as userId, u.login, ud.created_at, ud.admin
            FROM App\Entity\Question q 
            JOIN q.userId u
            JOIN u.userDetails ud
            WHERE q.id = :id
        ')->setParameter('id', $id);
        return $query->getArrayResult();
    }

    public function getWithoutAnswers()
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery('
            SELECT q.id, q.content
            FROM App\Entity\Question q           
            WHERE q.id NOT IN (SELECT
            DISTINCT(a.questionId)
            FROM App\Entity\Answer a)
        ');

        return $query->getArrayResult();
    }

    public function getByUserId($id) {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery('
            SELECT q.id, q.content 
            FROM App\Entity\Question q
            WHERE q.userId = :id
        ')->setParameter('id', $id);

        return $query->getArrayResult();
    }

    // /**
    //  * @return Question[] Returns an array of Question objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Question
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
