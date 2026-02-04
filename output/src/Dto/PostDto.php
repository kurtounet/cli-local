<?php

namespace App\Dto;

/**
 * DTO PostDto
 * Généré automatiquement par le SDK
 */
class PostDto
{

    /**
     * @var string
     */
    private $title;


    /**
     * Constructeur
     */
    public function __construct(

        string $title

    ) {

        this->title = $title;

    }


    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

}