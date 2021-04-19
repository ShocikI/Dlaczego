<?php

namespace App\Controller;

use App\Entity\Question;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    public function home(User $user): Response
    {
        $this->isLogged($user);

        return $this->render('default/index.html.twig', [

        ]);
    }

    public function settings(): Response
    {
        return $this->render('settings/index.html.twig', [

        ]);
    }

    public function addquestion(User $user): Response
    {
        $this->isLogged($user);

        return $this->render('addquestion/index.html.twig', []);
    }

    public function profile(User $user): Response
    {
        $this->isLogged($user);

        return $this->render('profile/index.html.twig', [

        ]);
    }

    public function title(): Response
    {
        return $this->render('title/index.html.twig', [

            ]);
    }

    public function isLogged(User $user): ? Response {
        if(!isset($user)) {
            return $this->render('default/index.html.twig', [
                'message' => 'Nie jesteś zalogowany'
//                'questions' => questionRepo.getNewestQuestions()
            ]);
        }
    }
}
