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
        $withoutAnswers = $this->withoutAnswers();

        $question = $this->getDoctrine()
            ->getRepository(Question::class)
            ->getAll();
        if(!$question) {
            $question = "Brak pytań.";
        }

        return $this->json([
            'question' => $question,
            'withoutAnswers' => $withoutAnswers
        ], 201);
    }

    /**
     * @Route("/settings", name="settings", methods={"GET"})
     * @return JsonResponse
     */
    public function settings(): JsonResponse
    {
        return $this->json("settings",201);
    }

    /**
     * @Route("/user/{user_id}", name="user", methods={"GET"})
     * @param int $user_id
     * @return JsonResponse
     */
    public function user(int $user_id): JsonResponse
    {
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->getById($user_id);
        if(!$user) {
            $user = "Nie udało się odnaleźć użytkownika.";
        }

        $question = $this->getDoctrine()
            ->getRepository(Question::class)
            ->getByUserId($user_id);
        if (!$question) {
            $question = "Użytkownik o nic nie pytał.";
        }

        return $this->json([
            'user' => $user,
            'question' => $question
        ], 201);
    }

    /**
     * @Route("/question/{question_id}", name="question", methods={"GET"})
     * @param int $question_id
     * @return JsonResponse
     */
    public function question(int $question_id): JsonResponse
    {
        $question = $this->getDoctrine()
            ->getRepository(Question::class)
            ->getById($question_id);
        if(!$question) {
            $question = "Nie ma takiego pytania.";
        }

        if(!$question) {
            return $this->json([
                'message' => $question,
            ], 202);
        }

        $answers = $this->getDoctrine()
            ->getRepository(Answer::class)
            ->getByQuestionId($question_id);

        return $this->json([
            'question' => $question,
            'answers' => $answers,
        ], 201);
    }

    /**
     * @Route("/addQuestion", name="addQuestion", methods={"GET"})
     * @return JsonResponse
     */
    public function addQuestion(): JsonResponse
    {
        return $this->json("addQuestion", 201);
    }

    /**
     * @Route("/login", name="login", methods={"GET"})
     * @return JsonResponse
     */
    public function loginPage(): JsonResponse
    {
        return $this->json("login page", 201);
    }

    /**
     * @Route("/register", name="register", methods={"GET"})
     * @return JsonResponse
     */
    public function registerPage(): JsonResponse
    {
        return $this->json("register page", 201);
    }

    public function withoutAnswers(){
        $withoutAnswers = $this->getDoctrine()
            ->getRepository(Question::class)
            ->getWithoutAnswers();
        if(!$withoutAnswers)
        {
            $withoutAnswers = "Brak pytań bez odpowiedzi.";
        }
        return $withoutAnswers;
    }
}
