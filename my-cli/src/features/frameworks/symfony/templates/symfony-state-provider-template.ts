import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function symfonyStateProviderTemplate(entity: IEntityJson): string {
  return `<?php

namespace App\\State\\${entity.namePascalCase};

use App\\Entity\\${entity.namePascalCase};
use App\\Dto\\${entity.namePascalCase}ResponseDto;
use App\\Repository\\${entity.namePascalCase}Repository;

use ApiPlatform\\Metadata\\Operation;
use ApiPlatform\\State\\ProviderInterface;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;

class ${entity.namePascalCase}Provider implements ProviderInterface
{
    
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.collection_provider')]
        private ProviderInterface $providerInterface,
        private ${entity.namePascalCase}Repository $${entity.nameCamelCase}Repository,
    ) {}

    public function provide(
        Operation $operation,
        array $uriVariables = [],
        array $context = []
    ): object|array|null {
        $data = $this->providerInterface->provide(
            $operation,
            $uriVariables,
            $context
        );
        return $data;
    }
}
    /*
    "api_platform.validator.state.error_provider"
    "api_platform.doctrine.orm.state.item_provider", 
    "api_platform.doctrine.orm.state.collection_provider", 
    "api_platform.doctrine.orm.state.remove_processor", 
    "api_platform.doctrine.orm.state.persist_processor", 
    
    */
`;
}
