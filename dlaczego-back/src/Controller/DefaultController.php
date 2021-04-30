<?php

namespace App\Controller;

use App\Entity\Question;
use App\Entity\User;
use App\Repository\QuestionRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function home()
    {
        $questions = new Question();
        $questions->setContent('Dlaczego mi nie dziala?');

        return $this->json([
            "content: " . $questions->getContent(),
            "likes: " . "0",
            "dislikes: " . "0"
        ]);
    }

    /**
     * @Route("/settings", name="settings", methods={"GET"})
     */
    public function settings()
    {
        // TODO
    }

    /**
     * @Route("/profile/{user}", name="profile", methods={"GET"})
     */
    public function profile()
    {
        // TODO
    }

    /**
     * @Route("/{question_id}", name="question", methods={"GET"})
     */
    public function question()
    {
        // TODO
    }

    /**
     * @Route("/addQuestion", name="addQuestion", methods={"GET"})
     */
    public function addQuestion()
    {
        // TODO
    }

}
