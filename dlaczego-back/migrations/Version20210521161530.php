<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210521161530 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE user_auth_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE user_auth (id INT NOT NULL, login VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_825FFC90AA08CB10 ON user_auth (login)');
        $this->addSql('ALTER TABLE answer ALTER question_id_id DROP NOT NULL');
        $this->addSql('DROP INDEX uniq_2a2b15809d86650f');
        $this->addSql('ALTER TABLE user_details ALTER description DROP NOT NULL');
        $this->addSql('CREATE INDEX IDX_2A2B15809D86650F ON user_details (user_id_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE user_auth_id_seq CASCADE');
        $this->addSql('DROP TABLE user_auth');
        $this->addSql('ALTER TABLE answer ALTER question_id_id SET NOT NULL');
        $this->addSql('DROP INDEX IDX_2A2B15809D86650F');
        $this->addSql('ALTER TABLE user_details ALTER description SET NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX uniq_2a2b15809d86650f ON user_details (user_id_id)');
    }
}
