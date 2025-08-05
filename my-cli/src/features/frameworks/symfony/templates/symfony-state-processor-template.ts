import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function symfonyStateProcessorTemplate(entity: IEntityJson): string {
  return `<?php

namespace App\\State\\${entity.namePascalCase};

use App\\Entity\\${entity.namePascalCase};
use App\\Repository\\${entity.namePascalCase}Repository;

use ApiPlatform\\Metadata\\Operation;
use ApiPlatform\\State\\ProcessorInterface;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;

class ${entity.namePascalCase}Processor implements ProcessorInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.persist_processor')]
        private ProcessorInterface $processorInterface,
        private ${entity.namePascalCase}Repository $${entity.nameCamelCase}Repository,
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        $${entity.nameCamelCase} = new ${entity.namePascalCase}();
        return $${entity.nameCamelCase};
        
    }
}
    /*
    "api_platform.validator.state.error_provider"
    "api_platform.doctrine.orm.state.item_provider", 
    "api_platform.doctrine.orm.state.collection_provider", 
    "api_platform.doctrine.orm.state.remove_processor", 
    "api_platform.doctrine.orm.state.persist_processor", 

     "api_platform.state_processor.locator", 
     "api_platform.state_processor.serialize", 
     "api_platform.state_processor.write", 
     "api_platform.state_processor.add_link_header", 
     "api_platform.swagger_ui.processor", 
     "api_platform.hydra.processor.link", 
     "api_platform.doctrine.orm.state.remove_processor", 
     "api_platform.doctrine.orm.state.persist_processor", 
     "api_platform.http_cache.processor.add_headers", 
     "api_platform.hydra.processor.link.inner"
    
    */
`;
}
