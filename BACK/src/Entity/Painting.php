<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PaintingRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=PaintingRepository::class)
 * @UniqueEntity("title", "picture")
 */
class Painting
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $title;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $date;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $height;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $width;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $location;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $information;

    /**
     * @ORM\Column(type="text")
     */
    private $picture;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Frame::class, inversedBy="paintings")
     */
    private $frame;

    /**
     * @ORM\ManyToOne(targetEntity=Size::class, inversedBy="paintings")
     */
    private $size;

    /**
     * @ORM\ManyToOne(targetEntity=Situation::class, inversedBy="paintings")
     */
    private $situation;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, inversedBy="paintings")
     */
    private $categories;

    /**
     * @ORM\ManyToMany(targetEntity=Technique::class, inversedBy="paintings")
     */
    private $techniques;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->techniques = new ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHeight(): ?int
    {
        return $this->height;
    }

    public function setHeight(?int $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getWidth(): ?int
    {
        return $this->width;
    }

    public function setWidth(?int $width): self
    {
        $this->width = $width;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getInformation(): ?string
    {
        return $this->information;
    }

    public function setInformation(?string $information): self
    {
        $this->information = $information;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getFrame(): ?Frame
    {
        return $this->frame;
    }

    public function setFrame(?Frame $frame): self
    {
        $this->frame = $frame;

        return $this;
    }

    public function getSize(): ?Size
    {
        return $this->size;
    }

    public function setSize(?Size $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getSituation(): ?Situation
    {
        return $this->situation;
    }

    public function setSituation(?Situation $situation): self
    {
        $this->situation = $situation;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategories(Category $categories): self
    {
        if (!$this->categories->contains($categories)) {
            $this->categories[] = $categories;
        }

        return $this;
    }

    public function removeCategories(Category $categories): self
    {
        $this->categories->removeElement($categories);

        return $this;
    }

    /**
     * @return Collection|Techniques[]
     */
    public function getTechnique(): Collection
    {
        return $this->techniques;
    }

    public function addTechniques(Technique $techniques): self
    {
        if (!$this->techniques->contains($techniques)) {
            $this->techniques[] = $techniques;
        }

        return $this;
    }

    public function removeTechniques(Technique $techniques): self
    {
        $this->techniques->removeElement($techniques);

        return $this;
    }
}
