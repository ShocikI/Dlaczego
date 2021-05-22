<?php

namespace App\Form;

use App\Entity\Answer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddAnswerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $date = date("Y-m-d H:i:s");

        $builder
            ->add('content'     ,TextareaType::class, [
                'required' => true
            ])
            ->add('created_at'  ,DateType::class, [
                'data' => $date
            ])
            ->add('likes'       ,IntegerType::class, [
                'data' => 0
            ])
            ->add('dislikes'    ,IntegerType::class, [
                'data' => 0
            ])
            ->add('questionId'  ,IntegerType::class, [

            ])
            ->add('userId'      ,IntegerType::class, [

            ])
            ->add('save'        ,SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Answer::class,
        ]);
    }
}
