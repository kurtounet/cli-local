<?php

namespace App\Entity;

/**
 * Entity User
 */
class User 
{
    private $id;


    private $email; // type: string


    public function getId(): ?int
    {
        return $this.id;
    }
}