import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function toIriListTemplate(entity: IEntityJson) {
  return `
    private function toIriList(iterable $items, string $resourceClass): array
    {
        $iris = [];

        foreach ($items as $item) {
            if (!is_object($item)) {
                continue;
            }

            $iri = ($this->iriFromResource)($resourceClass, $item->getId());
            if (null !== $iri) {
                $iris[] = $iri;
            }
        }
        return $iris;
    }`;
}
