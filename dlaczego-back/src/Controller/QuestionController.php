<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Question;
use Symfony\Component\Validator\Constraints\DateTime;

class QuestionController extends AbstractController
{
    /**
     * @Route("/addQuestion", name="newQuestion", methods{"POST"})
     */
//    public function newQuestions()
//    {
//        $entityManager = $this->getDoctrine()->getManager();
//
//        $date = new \DateTime();
//
//        $question = new Question();
//        $question->setContent('Dlaczego mi nie działa?');
//        $question->setCreatedAt($date);
//        $question->setLikes(0);
//        $question->setDislikes(0);
//        $question->setUserId(null);
//
//        $entityManager->persist($question);
//
//        $entityManager->flush();
//
//        return $this->json([
//            $question->getContent(),
//            $question->getCreatedAt(),
//            $question->getLikes(),
//            $question->getDislikes(),
//            $question->getUserId()
//        ]);
//    }

    /**
     * @Route("/{question_id}", name="deleteQuestion", methods{"DELETE"})
     */
//    public function deleteQuestion($question_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveLike", methods{""})
     */
//    public function giveLike($question_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveDislike", methods{""})
     */
//    public function giveDislike($question_id)
//    {
//        // TODO
//    }

}
