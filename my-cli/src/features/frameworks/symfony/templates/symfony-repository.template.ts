// Template pour une interface Symfony
import { IEntityJson } from "@interfaces/entity-json.model";

export function getSymfonyInterfaceTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map(
        (col: any) =>
          `    public function get${col.name}();\n    public function set${col.name}(\${col.name});`,
      )
      .join("\n") || "";
  return `<?php\n\nnamespace App\Interfaces;\n\ninterface ${entity.namePascalCase}Interface\n{\n${properties}\n}\n`;
}
export function symfonyEntityRepositoryTemplate(entity: IEntityJson) {
  return `<?php

namespace App\\Repository;

use App\\Entity\\${entity.namePascalCase};
use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
use Doctrine\\Persistence\\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<${entity.namePascalCase}>
 */
class ${entity.namePascalCase}Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ${entity.namePascalCase}::class);
    }

    //    /**
    //     * @return ${entity.namePascalCase}[] Returns an array of ${entity.namePascalCase} objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('a.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?${entity.namePascalCase}
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
`;
}
