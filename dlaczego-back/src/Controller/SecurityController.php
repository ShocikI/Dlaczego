<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends AbstractController
{
    /**
     * @Route("/register", name="newUser", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function newUser(Request $request): Response
    {

        $request->headers->set('Access-Control-Allow-Origin','*');
        $request->headers->set('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');

        if ($request->getMethod() != "POST") {
            return $this->json("Method is not POST", 400);
        }
        $entityManager = $this->getDoctrine()->getManager();

        $user = new User();

        $data = $request->getContent();
        return new Response($data, 201);
        if ($data == NULL)
        {
//            $user = $data;

//            $entityManager->persist($user);
//
//            $entityManager->flush();

            return new Response($data, 201);
        }

        return $this->json($data, 400);
    }

    /**
     * @Route("/settings", name="deleteUser", methods={"DELETE"})
     */
    public function deleteUser()
    {
        // TODO
        return $this->json("settings");
    }

    /**
     * @Route("/settings", name="changeDescription", methods={"POST"})
     */
    public function changeDescription()
    {
        // TODO
        return $this->json("change description");
    }

    /**
     * @Route("/{user}, name="giveLike", methods{"PUT"})
     */
//    public function giveLike($user)
//    {
//        // TODO
//    }

    /**
     * @Route("/{user}, name="giveDislike", methods{"PUT"})
     */
//    public function giveDislike($user)
//    {
//        // TODO
//    }

/**
 * @Route("/login", name="app_login")
 */
//public function login(AuthenticationUtils $authenticationUtils): Response
//{
//    // if ($this->getUser()) {
//    //     return $this->redirectToRoute('target_path');
//    // }
//
//    // get the login error if there is one
//    $error = $authenticationUtils->getLastAuthenticationError();
//    // last username entered by the user
//    $lastUsername = $authenticationUtils->getLastUsername();
//
//    return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
//}
//
///**
// * @Route("/logout", name="app_logout")
// */
//public function logout()
//{
//    throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
//}
}
