<?php

namespace App\Controller;

use App\Entity\Answer;
use App\Entity\Question;
use App\Entity\User;
use App\Repository\QuestionRepository;
use App\Repository\AnswerRepository;
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
        $question = $this->getDoctrine()
            ->getRepository(Question::class)
            ->getAll();

        if(!$question) {
            return $this->json("Brak pytań", 202);
        }

        return $this->json($question, 201);
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

    /**
     * @Route("/question/{question_id}", name="question", methods={"GET"})
     * @param int $question_id
     * @return JsonResponse
     */
    public function question(int $question_id): JsonResponse
    {
        if ($question_id < 0) {
            return $this->json("Brak pytania o tym numerze :(", 202);
        }

        $question = $this->getDoctrine()
            ->getRepository(Question::class)
            ->getById($question_id);

        $answers = $this->getDoctrine()
            ->getRepository(Answer::class)
            ->getByQuestionId($question_id);

        if(!$question) {
            return $this->json("Brak pytania o tym numerze :(", 202);
        }

        return $this->json([
            'question' => $question,
            'answers' => $answers
            ], 201);
    }

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
