<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
    /**
     * @Route("/settings", name="settings")
     */
    public function settings()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
    /**
     * @Route("/profile/{user}", name="profile")
     */
//    public function profile(User &user)
//    {
//        return $this->render('default/index.html.twig', [
//            'controller_name' => 'DefaultController',
//        ]);
//    }
//
//    /**
//     * @Route("/{question_id}", name="question")
//     */
//    public function question(Question $questionn)
//    {
//        return $this->render('default/index.html.twig', [
//            'controller_name' => 'DefaultController',
//        ]);
//    }

    /**
     * @Route("/addQuestion", name="addQuestion")
     */
    public function addQuestion(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

}
