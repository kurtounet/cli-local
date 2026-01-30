export interface RelationshipResult {
  relations: string[];
  entityImports: Set<string>;
  typeormImports: Set<string>;
}
