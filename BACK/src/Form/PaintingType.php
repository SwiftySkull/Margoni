<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Frame;
use App\Entity\Painting;
use App\Entity\Situation;
use App\Entity\Size;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class PaintingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de la peinture',
                'constraints' => new NotBlank(),
            ])
            ->add('date', DateType::class, [
                'label' => 'Date de la peinture',
                'widget' => 'choice',
            ])
            ->add('height', IntegerType::class, [
                'label' => 'Hauteur de la peinture',
            ])
            ->add('width', IntegerType::class, [
                'label' => 'Largeur de la peinture',
            ])
            ->add('size', EntityType::class, [
                'class' => Size::class,
                'label' => 'Format',
                'choice_label' => 'format',
                'placeholder' => 'Le tableau est au format...'
            ])
            ->add('location', TextareaType::class, [
                'label' => 'Localisation/Adresse actuelle de la peinture',
            ])
            ->add('information', TextareaType::class, [
                'label' => 'Informations complémentaires, histoire de la peinture',
            ])
            ->add('picture', FileType::class, [
                'label' => 'Fichier de la photo',
                'mapped' => false,
                'constraints' => new File([
                    'mimeTypes' => [
                        'image/png',
                        'image/jpeg',
                    ],
                    'mimeTypesMessage' => 'Le fichier n\'est pas au bon format (.png, .jpg, .jpeg)',
                ]),
            ])
            // ->add('createdAt')
            // ->add('updatedAt')
            ->add('frame', EntityType::class, [
                'class' => Frame::class,
                'label' => 'Encadrement',
                'choice_label' => 'framing',
                'placeholder' => 'Le tableau est actuellement...'
            ])
            ->add('situation', EntityType::class, [
                'class' => Situation::class,
                'label' => 'Collection',
                'choice_label' => 'collection',
                'placeholder' => 'Le tableau se trouve actuellement...'
            ])
            ->add('categories', ChoiceType::class, [
                'label' => 'Ce qui décrit le tableau :',
                'mapped' => false,
                'multiple' => true,
                'expanded' => true,
                'choices' => [
                    'Arbre' => 1,
                    'Dessin de tissu' => 2,
                    'Machines agricoles' => 3,
                    'Champs' => 4,
                    'Portrait' => 5,
                ],
            ])
            ->add('techniques', ChoiceType::class, [
                'label' => 'Les techniques utilisées sont :',
                'mapped' => false,
                'multiple' => true,
                'expanded' => true,
                'choices' => [
                    'Gouache' => 1,
                    'Peinture à l\'huile' => 2,
                    'Peinture à l\'eau' => 3,
                    'Collage' => 4,
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Painting::class,
        ]);
    }
}
