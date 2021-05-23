<?php

namespace App\Controller;

use App\Entity\Question;
use App\Entity\User;
use App\Repository\QuestionRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     * @return JsonResponse
     */
    public function home(): JsonResponse
    {
        $questions = new Question();
        $questions->setContent('Dlaczego mi nie działa?');
        $questions->setLikes(0);
        $questions->setDislikes(0);

        return $this->json([
            $questions->getContent(),
            $questions->getLikes(),
            $questions->getDislikes(),
        ]);
    }

    /**
     * @Route("/settings", name="settings", methods={"GET"})
     * @return JsonResponse
     */
    public function settings(): JsonResponse
    {
        // TODO
        return $this->json("settings");
    }

//    /**
//     * @Route("/profile/{user}", name="profile", methods={"GET"})
//     * @param string $login
//     * @return JsonResponse
//     */
//    public function profile(string $login): JsonResponse
//    {
//        $uRepo = $this->get(UserRepository::class);
//        $user = $uRepo->findOneBy($login, );
//        $userD = $user->getUserDetails();
//
//        return $this->json([
//            $user->getLogin(),
//            $userD[1],
//            $userD[2],
//            $userD[3],
//            $user->getQuestions()
//        ]);
//        return $this->json("profile");
//    }

//    /**
//     * @Route("/{question_id}", name="question", methods={"GET"})
//     * @param int $question_id
//     * @return JsonResponse
//     */
//    public function question(int $question_id): JsonResponse
//    {
//        return $this->json("question");
//    }

    /**
     * @Route("/addQuestion", name="addQuestion", methods={"GET"})
     * @return JsonResponse
     */
    public function addQuestion(): JsonResponse
    {
        // TODO
        return $this->json("add_question");
    }

    /**
     * @Route("/login", name="login", methods={"GET"})
     * @return JsonResponse
     */
    public function loginPage(): JsonResponse
    {
        return $this->json("login page");
    }

    /**
     * @Route("/register", name="register", methods={"GET"})
     * @return JsonResponse
     */
    public function registerPage(): JsonResponse
    {
        return $this->json("register page");
    }
}
