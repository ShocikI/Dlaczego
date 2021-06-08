<?php

namespace App\Controller;

use App\Form\AddAnswerType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Answer;

class AnswerController extends AbstractController
{

    /**
     * @Route("/{question_id}", name="newAnswer", methods={"POST"})
     * @param Request $request
     * @param int $question_id
     * @return RedirectResponse
     */
//    public function newAnswer(Request $request, int $question_id): RedirectResponse
//    {
//
//        $entityManager = $this->getDoctrine()->getManager();
//
//        $answer = new Answer();
//
//        $form = $this->createForm(AddAnswerType::class, $answer);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid())
//        {
//            $answer = $form->getData();
//
//            $entityManager->persist($answer);
//
//            $entityManager->flush();
//        }
//
//        return $this->redirect('/'.$question_id);
//    }

    /**
     * @Route("/{question_id}", name="deleteAnswer", methods={"DELETE"})
     */
//    public function deleteAnswer($question_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveLike", methods{"PUT"})
     */
//    public function giveLike($question_id, $answer_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveDislike", methods{"PUT"})
     */
//    public function giveDislike($question_id, $answer_id)
//    {
//        // TODO
//    }
}
