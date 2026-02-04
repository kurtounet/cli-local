<?php

namespace App\Entity;

/**
 * Entity Post
 */
class Post 
{
    private $id;


    private $title; // type: string


    public function getId(): ?int
    {
        return $this.id;
    }
}