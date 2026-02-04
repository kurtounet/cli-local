<?php

namespace App\Dto;

/**
 * DTO UserDto
 * Généré automatiquement par le SDK
 */
class UserDto
{

    /**
     * @var string
     */
    private $email;


    /**
     * Constructeur
     */
    public function __construct(

        string $email

    ) {

        this->email = $email;

    }


    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

}