<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Frame;
use App\Entity\Painting;
use App\Entity\Situation;
use Faker\Factory;
use App\Entity\Size;
use App\Entity\Technique;
use Doctrine\DBAL\Connection;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    private $connection;
    public function truncate()
    {
        $trun = $this->connection->executeQuery('SET foreign_key_checks = 0');
        $trun = $this->connection->executeQuery('TRUNCATE TABLE category');
        $trun = $this->connection->executeQuery('TRUNCATE TABLE frame');
        $trun = $this->connection->executeQuery('TRUNCATE TABLE painting');
        $trun = $this->connection->executeQuery('TRUNCATE TABLE situation');
        $trun = $this->connection->executeQuery('TRUNCATE TABLE size');
        $trun = $this->connection->executeQuery('TRUNCATE TABLE technique');
    }

    private $formatNumber = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120];
    private $formatLetter = ['F', 'P', 'M'];
    private $framing = ['Non renseigné', 'Non encadré', 'Cadre seul', 'Cadre + verre', 'Spécial'];
    private $technique = ['Gouache', 'Peinture à l\'huile', 'Peinture à l\'eau', 'Collage'];
    private $collection = ['Non présicé', 'Chez l\'artiste', 'Vendu à un particulier', 'Vendu à des professionnels', 'Actuellement exposé'];
    private $category = ['Arbre', 'Dessin de tissu', 'Machines agricoles', 'Champs', 'Portrait'];

    const NB_PAINTINGS = 1000;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function load(ObjectManager $manager): void
    {
        $this->truncate();

        $faker = Factory::create();
    
        $formatsList = [];
        $framesList = [];
        $techniquesList = [];
        $collectionsList = [];
        $categoriesList = [];
        $paintingsList = [];

        for ($i=0; $i < count($this->formatLetter); $i++) {
            for ($j=0; $j < count($this->formatNumber); $j++) { 
                $format = new Size();
                $format->setFormat($this->formatNumber[$j].$this->formatLetter[$i]);

                $formatsList[] = $format;

                $manager->persist($format);
            }            
        }

        for ($i=0; $i < count($this->framing); $i++) { 
            $frame = new Frame();
            $frame->setFraming($this->framing[$i]);

            $framesList[] = $frame;

            $manager->persist($frame);
        }

        for ($i=0; $i < count($this->technique); $i++) { 
            $technique = new Technique();
            $technique->setType($this->technique[$i]);

            $techniquesList[] = $technique;

            $manager->persist($technique);
        }

        for ($i=0; $i < count($this->collection); $i++) { 
            $collection = new Situation();
            $collection->setCollection($this->collection[$i]);

            $collectionsList[] = $collection;

            $manager->persist($collection);
        }

        for ($i=0; $i < count($this->category); $i++) { 
            $category = new Category();
            $category->setName($this->category[$i]);

            $categoriesList[] = $category;

            $manager->persist($category);
        }

        for ($i=1; $i < self::NB_PAINTINGS; $i++) { 
            $painting = new Painting();
            $painting->setDbName('Peinture '.$i);
            $x = mt_rand(0, 1);
            if (1 == $x) {
                $painting->setTitle($faker->words(mt_rand(1, 5), true));
            }
            $painting->setDate($faker->dateTimeBetween('-100 years', '-30 years'));

            $height = mt_rand(300, 1500);
            $width = mt_rand(300, 1500);

            $painting->setHeight($height);
            $painting->setWidth($width);
            $painting->setPicture('https://picsum.photos/'.$height.'/'.$width);
            $painting->setInformation($faker->sentence(150));
            $painting->setLocation($faker->sentence(10));

            // $formatsList = [];
            // $framesList = [];
            // $collectionsList = [];
    
            shuffle($collectionsList);
            $painting->setSituation($collectionsList[0]);
            shuffle($formatsList);
            $painting->setSize($formatsList[0]);
            shuffle($framesList);
            $painting->setFrame($framesList[0]);

            // $techniquesList = [];
            // $categoriesList = [];

            shuffle($techniquesList);
            $painting->addTechniques($techniquesList[0]);
            shuffle($categoriesList);
            $painting->addCategories($categoriesList[0]);

            $paintingsList[] = $painting;

            $manager->persist($painting);
        }

        $manager->flush();
    }
}
