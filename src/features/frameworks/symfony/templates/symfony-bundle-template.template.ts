export function getBundleTemplate(name: string): string {
  return `<?php

namespace App\Bundle\${name};

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ${name}Bundle extends Bundle
{
}
`;
}
