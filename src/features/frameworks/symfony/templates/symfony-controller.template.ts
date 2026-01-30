export function getControllerTemplate(name: string): string {
  return `<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ${name}Controller extends AbstractController
{
    /**
     * @Route('/${name.toLowerCase()}', name='${name.toLowerCase()}_index')
     */
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new ${name} controller!',
            'path' => 'src/Controller/${name}Controller.php',
        ]);
    }
}
`;
}
