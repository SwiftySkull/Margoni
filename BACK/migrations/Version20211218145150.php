<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211218145150 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA03FA3C347');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA03FA3C347 FOREIGN KEY (frame_id) REFERENCES frame (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA03FA3C347');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA03FA3C347 FOREIGN KEY (frame_id) REFERENCES frame (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
