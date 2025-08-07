// Template pour un test Symfony
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getSymfonyTestTemplate(entity: IEntityJson) {
  return `<?php\n\nnamespace App\Tests;\n\nuse Symfony\Bundle\FrameworkBundle\Test\WebTestCase;\n\nclass ${entity.namePascalCase}ControllerTest extends WebTestCase\n{\n    public function testSomething(): void\n    {\n        $client = static::createClient();\n        $crawler = $client->request('GET', '/${entity.nameKebabCase}');\n\n        $this->assertResponseIsSuccessful();\n        $this->assertSelectorTextContains('h1', 'Hello ${entity.namePascalCase}');\n    }\n}\n`;
}
