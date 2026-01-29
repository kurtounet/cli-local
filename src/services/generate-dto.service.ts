import { BaseGenerator } from "./base-generator.service.js";

export class GenerateDtoService extends BaseGenerator {
  protected getFolder(): string {
    return "models/dtos";
  }

  protected getSuffix(): string {
    return "dto";
  }

  protected getTemplate(name: string): string {
    return `export interface ${name}DTO {
  id: string;
  createdAt: Date;
}`;
  }
}
