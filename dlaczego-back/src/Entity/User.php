<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $login;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=9)
     */
    private $telnumber;

    /**
     * @ORM\OneToMany(targetEntity=UserDetails::class, mappedBy="userId")
     */
    private $userDetails;

    /**
     * @ORM\OneToMany(targetEntity=Question::class, mappedBy="userId")
     */
    private $questions;

    /**
     * @ORM\OneToMany(targetEntity=Answer::class, mappedBy="userId")
     */
    private $answers;

    public function __construct()
    {
        $this->userDetails = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->answers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogin(): ?string
    {
        return $this->login;
    }

    public function setLogin(string $login): self
    {
        $this->login = $login;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTelnumber(): ?string
    {
        return $this->telnumber;
    }

    public function setTelnumber(string $telnumber): self
    {
        $this->telnumber = $telnumber;

        return $this;
    }

    /**
     * @return Collection|UserDetails[]
     */
    public function getUserDetails(): Collection
    {
        return $this->userDetails;
    }

    public function addUserDetail(UserDetails $userDetail): self
    {
        if (!$this->userDetails->contains($userDetail)) {
            $this->userDetails[] = $userDetail;
            $userDetail->setUserId($this);
        }

        return $this;
    }

    public function removeUserDetail(UserDetails $userDetail): self
    {
        if ($this->userDetails->removeElement($userDetail)) {
            // set the owning side to null (unless already changed)
            if ($userDetail->getUserId() === $this) {
                $userDetail->setUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Question[]
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions[] = $question;
            $question->setUserId($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getUserId() === $this) {
                $question->setUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Answer[]
     */
    public function getAnswers(): Collection
    {
        return $this->answers;
    }

    public function addAnswer(Answer $answer): self
    {
        if (!$this->answers->contains($answer)) {
            $this->answers[] = $answer;
            $answer->setUserId($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): self
    {
        if ($this->answers->removeElement($answer)) {
            // set the owning side to null (unless already changed)
            if ($answer->getUserId() === $this) {
                $answer->setUserId(null);
            }
        }

        return $this;
    }
}
