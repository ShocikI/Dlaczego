<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends AbstractController
{

    /**
     * @Route("/", name="login", methods={"POST"})
     */
//    public function login()
//    {
//        // TODO
//    }

    /**
     * @Route("/settings", name="logout", methods={"POST"})
     */
//    public function logout()
//    {
//        // TODO
//    }

    /**
     * @Route("/", name="register", methods={"POST"})
     */
//    public function register()
//    {
//        // TODO
//        $entityManager = $this->getDoctrine()->getManager();
//
//        $user = new User();
//        $user->setEmail('mail@mail.pl');
//        $user->setLogin('PechAp');
//        $user->setPassword('peszek');
//        $user->setTelnumber('999999999');
//
//        $entityManager->persist($user);
//
//        $entityManager->flush();
//
//        return $this->json([
//           $user->getEmail(),
//           $user->getLogin(),
//           $user->getPassword(),
//           $user->getTelnumber()
//        ]);
//    }

    /**
     * @Route("/settings", name="deleteUser", methods={"DELETE"})
     */
//    public function deleteUser()
//    {
//        // TODO
//    }

    /**
     * @Route("/settings", name="changeDescription", methods={"POST"})
     */
//    public function changeDescription()
//    {
//        // TODO
//    }

    /**
     * @Route("/{user}, name="giveLike", methods{""})
     */
//    public function giveLike($user)
//    {
//        // TODO
//    }

    /**
     * @Route("/{user}, name="giveDislike", methods{""})
     */
//    public function giveDislike($user)
//    {
//        // TODO
//    }

/**
 * @Route("/login", name="app_login")
 */
public function login(AuthenticationUtils $authenticationUtils): Response
{
    // if ($this->getUser()) {
    //     return $this->redirectToRoute('target_path');
    // }

    // get the login error if there is one
    $error = $authenticationUtils->getLastAuthenticationError();
    // last username entered by the user
    $lastUsername = $authenticationUtils->getLastUsername();

    return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
}

/**
 * @Route("/logout", name="app_logout")
 */
public function logout()
{
    throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
}
}
