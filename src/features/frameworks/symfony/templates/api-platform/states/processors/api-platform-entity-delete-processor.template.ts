import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function apiPlatformEntityDeleteProcessorTemplate(entity: IEntityJson) {
  return `<?php

namespace App\\ApiResource\\States\\${entity.namePascalCase};

use ApiPlatform\\Metadata\\Delete;
use ApiPlatform\\Metadata\\Operation;
use ApiPlatform\\State\\ProcessorInterface;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;

/**
 * Delete processor pour ${entity.namePascalCase}.
 *
 * @implements ProcessorInterface<App\\Entity\\${entity.namePascalCase}, void>
 */
final readonly class ${entity.namePascalCase}DeleteProcessor implements ProcessorInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.remove_processor')]
        private ProcessorInterface $removeProcessor,
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        if ($operation instanceof Delete) {
            $this->removeProcessor->process($data, $operation, $uriVariables, $context);
            return null;
        }

        return $data;
    }
}
`;
}
