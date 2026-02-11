// Template pour un test NestJS
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getNestjsTestTemplate(entity: IEntityJson) {
  return `import { Test, TestingModule } from '@nestjs/testing';
import { ${entity.namePascalCase}Controller } from './${entity.nameKebabCase}.controller';

describe('${entity.namePascalCase}Controller', () => {
  let controller: ${entity.namePascalCase}Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${entity.namePascalCase}Controller],
    }).compile();

    controller = module.get<${entity.namePascalCase}Controller>(${entity.namePascalCase}Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
`;
}
