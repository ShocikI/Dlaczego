<?php

namespace App\Controller;

use App\Form\AddQuestionType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Question;

class QuestionController extends AbstractController
{
    /**
     * @Route("/addQuestion", name="newQuestion", methods={"POST"})
     * @param Request $request
     * @return RedirectResponse
     */
    public function newQuestions(Request $request): RedirectResponse
    {
        $entityManager = $this->getDoctrine()->getManager();

        $question = new Question();

        $form = $this->createForm(AddQuestionType::class, $question);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $question = $form->getData();

            $entityManager->persist($question);

            $entityManager->flush();
        }

        return $this->redirect('/');
    }

    /**
     * @Route("/{question_id}", name="deleteQuestion", methods{"DELETE"})
     */
//    public function deleteQuestion($question_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveLike", methods{"PUT"})
     */
//    public function giveLike($question_id)
//    {
//        // TODO
//    }

    /**
     * @Route("/{question_id}, name="giveDislike", methods{"PUT"})
     */
//    public function giveDislike($question_id)
//    {
//        // TODO
//    }

}
