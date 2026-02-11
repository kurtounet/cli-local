export interface DtoProperty {
  name: string;
  isOptional: boolean;
  tsType: string;
  decorators: string[];
  description?: string;
}
