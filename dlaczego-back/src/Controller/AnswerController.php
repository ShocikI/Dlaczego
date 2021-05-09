<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Answer;

class AnswerController extends AbstractController
{

    /**
     * @Route("/{question_id}", name="newAnswer", methods={"POST"})
     */
//    public function newAnswer($question_id)
//    {
//        // TODO
//        $entityManager = $this->getDoctrine()->getManager();
//
//        $date = new \DateTime();
//
//        $answer = new Answer();
//        $answer->setContent('No słabo Ci idzie, słabo');
//        $answer->setCreatedAt($date);
//        $answer->setLikes(0);
//        $answer->setDislikes(0);
//        $answer->setQuestionId($question_id);
//        $answer->setUserId(null);
//
//        $entityManager->persist($answer);
//
//        $entityManager->flush();
//
//        return $this->json([
//            $answer->getContent(),
//            $answer->getCreatedAt(),
//            $answer->getLikes(),
//            $answer->getDislikes()
//        ]);
//    }

    /**
     * @Route("/{question_id}", name="deleteAnswer", methods={"DELETE"})
     */
//    public function deleteAnswer($question_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveLike", methods{""})
     */
//    public function giveLike($question_id, $answer_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveDislike", methods{""})
     */
//    public function giveDislike($question_id, $answer_id)
//    {
//        // TODO
//    }
}
