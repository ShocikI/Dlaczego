<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\Driver\Exception;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function addUser(User $user): bool
    {
        $conn = $this->getEntityManager()->getConnection();
        $date = DateTime();
        $stmt = $conn->prepare('
            INSERT INTO user (email, login, password, telnumber)
            VALUES (?, ?, ?, ?);
        ');
        try {
            $stmt->execute([
                $user->getEmail(),
                $user->getLogin(),
                $user->getPassword(),
                $user->getTelnumber()
            ]);
        } catch (Exception $e) {
        }

        $datestmt = $conn->prepare('
            INSERT INTO userdetails (created_at)
            VALUES (?);
        ');
        try {
            $datestmt->execute([
                $date
            ]);
        } catch (Exception $e) {
        }

        return ($stmt && $datestmt);
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
