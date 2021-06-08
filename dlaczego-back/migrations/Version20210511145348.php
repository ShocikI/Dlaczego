<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210511145348 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer ALTER question_id_id SET NOT NULL');
        $this->addSql('DROP INDEX question_content_uindex');
        $this->addSql('DROP INDEX user_login_uindex');
        $this->addSql('DROP INDEX user_telnumber_uindex');
        $this->addSql('DROP INDEX user_email_uindex');
        $this->addSql('DROP INDEX idx_2a2b15809d86650f');
        $this->addSql('ALTER TABLE user_details ALTER description SET NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_2A2B15809D86650F ON user_details (user_id_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE UNIQUE INDEX question_content_uindex ON question (content)');
        $this->addSql('ALTER TABLE answer ALTER question_id_id DROP NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX user_login_uindex ON "user" (login)');
        $this->addSql('CREATE UNIQUE INDEX user_telnumber_uindex ON "user" (telnumber)');
        $this->addSql('CREATE UNIQUE INDEX user_email_uindex ON "user" (email)');
        $this->addSql('DROP INDEX UNIQ_2A2B15809D86650F');
        $this->addSql('ALTER TABLE user_details ALTER description DROP NOT NULL');
        $this->addSql('CREATE INDEX idx_2a2b15809d86650f ON user_details (user_id_id)');
    }
}
