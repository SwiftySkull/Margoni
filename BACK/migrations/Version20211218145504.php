<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211218145504 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA03408E8AF');
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA0498DA827');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA03408E8AF FOREIGN KEY (situation_id) REFERENCES situation (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA0498DA827 FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA0498DA827');
        $this->addSql('ALTER TABLE painting DROP FOREIGN KEY FK_66B9EBA03408E8AF');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA0498DA827 FOREIGN KEY (size_id) REFERENCES size (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE painting ADD CONSTRAINT FK_66B9EBA03408E8AF FOREIGN KEY (situation_id) REFERENCES situation (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
