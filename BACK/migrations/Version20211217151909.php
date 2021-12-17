<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211217151909 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(30) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE frame (id INT AUTO_INCREMENT NOT NULL, framing VARCHAR(50) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE painting (id INT AUTO_INCREMENT NOT NULL, frame_id INT DEFAULT NULL, size_id INT DEFAULT NULL, situation_id INT DEFAULT NULL, title VARCHAR(50) NOT NULL, date DATETIME DEFAULT NULL, height INT DEFAULT NULL, width INT DEFAULT NULL, location LONGTEXT DEFAULT NULL, information LONGTEXT DEFAULT NULL, picture LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_66B9EBA03FA3C347 (frame_id), INDEX IDX_66B9EBA0498DA827 (size_id), INDEX IDX_66B9EBA03408E8AF (situation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE painting_category (painting_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_79D2014EB00EB939 (painting_id), INDEX IDX_79D2014E12469DE2 (category_id), PRIMARY KEY(painting_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE painting_technique (painting_id INT NOT NULL, technique_id INT NOT NULL, INDEX IDX_AA4398E8B00EB939 (painting_id), INDEX IDX_AA4398E81F8ACB26 (technique_id), PRIMARY KEY(painting_id, technique_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE situation (id INT AUTO_INCREMENT NOT NULL, collection VARCHAR(40) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE size (id INT AUTO_INCREMENT NOT NULL, format VARCHAR(10) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE technique (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(40) NOT NULL, created_at DATETIME NOT NULL, uptadet_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA03FA3C347 FOREIGN KEY (frame_id) REFERENCES frame (id)');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA0498DA827 FOREIGN KEY (size_id) REFERENCES size (id)');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA03408E8AF FOREIGN KEY (situation_id) REFERENCES situation (id)');
        $this->addSql('ALTER TABLE painting_category ADD CONSTRAINT FK_79D2014EB00EB939 FOREIGN KEY (painting_id) REFERENCES painting (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE painting_category ADD CONSTRAINT FK_79D2014E12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE painting_technique ADD CONSTRAINT FK_AA4398E8B00EB939 FOREIGN KEY (painting_id) REFERENCES painting (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE painting_technique ADD CONSTRAINT FK_AA4398E81F8ACB26 FOREIGN KEY (technique_id) REFERENCES technique (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE painting_category DROP FOREIGN KEY FK_79D2014E12469DE2');
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA03FA3C347');
        $this->addSql('ALTER TABLE painting_category DROP FOREIGN KEY FK_79D2014EB00EB939');
        $this->addSql('ALTER TABLE painting_technique DROP FOREIGN KEY FK_AA4398E8B00EB939');
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA03408E8AF');
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA0498DA827');
        $this->addSql('ALTER TABLE painting_technique DROP FOREIGN KEY FK_AA4398E81F8ACB26');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE frame');
        $this->addSql('DROP TABLE painting');
        $this->addSql('DROP TABLE painting_category');
        $this->addSql('DROP TABLE painting_technique');
        $this->addSql('DROP TABLE situation');
        $this->addSql('DROP TABLE size');
        $this->addSql('DROP TABLE technique');
    }
}
