import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function nestjsControlleTemplate(entity: IEntityJson): string {
  return `import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

import { ${entity.namePascalCase}Service } from '../service/${entity.nameKebabCase}.service';
import { Create${entity.namePascalCase}Dto } from '../dto/create-${entity.nameKebabCase}.dto';
import { Update${entity.namePascalCase}Dto } from '../dto/update-${entity.nameKebabCase}.dto';
import { Response${entity.namePascalCase}Dto } from '../dto/response-${entity.nameKebabCase}.dto';

@ApiTags('${entity.namePascalCase}s')
@Controller('${entity.tableName}')
export class ${entity.namePascalCase}Controller {
  constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Créer un nouveau ${entity.nameCamelCase}',
    description: 'Crée un nouveau ${entity.nameCamelCase} dans le système.',
  })
  @ApiResponse({
    status: 201,
    description: 'Le ${entity.nameCamelCase} a été créé avec succès.',
    type: Response${entity.namePascalCase}Dto,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide. Vérifiez les données fournies.',
  })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async create(
    @Body() create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto,
  ): Promise<Response${entity.namePascalCase}Dto> {
    return await this.${entity.nameCamelCase}Service.create(create${entity.namePascalCase}Dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Récupérer tous les ${entity.nameCamelCase}s',
    description:
      'Retourne une liste de tous les ${entity.nameCamelCase}s enregistrés dans le système.',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des ${entity.nameCamelCase}s récupérée avec succès.',
    type: [Response${entity.namePascalCase}Dto],
  })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async findAll(): Promise<Response${entity.namePascalCase}Dto[]> {
    return await this.${entity.nameCamelCase}Service.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Récupérer un ${entity.nameCamelCase} par ID',
    description:
      'Retourne les détails d un ${entity.nameCamelCase} spécifique en utilisant son ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID du ${entity.nameCamelCase} à récupérer',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Le ${entity.nameCamelCase} a été récupéré avec succès.',
    type: Response${entity.namePascalCase}Dto,
  })
  @ApiResponse({ status: 404, description: '${entity.namePascalCase} non trouvé.' })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Response${entity.namePascalCase}Dto> {
    return await this.${entity.nameCamelCase}Service.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Mettre à jour un ${entity.nameCamelCase}',
    description:
      'Met à jour partiellement ou complètement un ${entity.nameCamelCase} existant en utilisant son ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID du ${entity.nameCamelCase} à mettre à jour',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Le ${entity.nameCamelCase} a été mis à jour avec succès.',
    type: Response${entity.namePascalCase}Dto,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide. Vérifiez les données fournies.',
  })
  @ApiResponse({ status: 404, description: '${entity.namePascalCase} non trouvé.' })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto,
  ): Promise<Response${entity.namePascalCase}Dto> {
    return await this.${entity.nameCamelCase}Service.update(id, update${entity.namePascalCase}Dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Supprimer un ${entity.nameCamelCase}',
    description: 'Supprime un ${entity.nameCamelCase} du système en utilisant son ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID du ${entity.nameCamelCase} à supprimer',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 204,
    description: 'Le ${entity.nameCamelCase} a été supprimé avec succès.',
  })
  @ApiResponse({ status: 404, description: '${entity.namePascalCase} non trouvé.' })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.${entity.nameCamelCase}Service.remove(id);
  }
}`;
}
