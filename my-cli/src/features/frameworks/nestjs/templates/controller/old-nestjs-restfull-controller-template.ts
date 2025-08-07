import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsControlleRestfullTemplate(entity: IEntityJson): string {
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
  ParseIntPipe, // Pour valider et convertir l'ID en nombre
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger'; // Ajout de ApiTags et ApiParam
import { ${entity.namePascalCase}Service } from '../service/${entity.nameKebabCase}.service';
import { Create${entity.namePascalCase}Dto } from '../dto/create-${entity.nameKebabCase}.dto';
import { Update${entity.namePascalCase}Dto } from '../dto/update-${entity.nameKebabCase}.dto';
import { Response${entity.namePascalCase}Dto } from '../dto/response-${entity.nameKebabCase}.dto';

@ApiTags('${entity.namePascalCase}s') // Ajoute une balise pour grouper les endpoints dans Swagger
@Controller('${entity.tableName}')
export class ${entity.namePascalCase}Controller {
  constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Créer un nouveau ${entity.nameKebabCase}', description: 'Crée un nouveau ${entity.nameKebabCase} dans le système.' })
  @ApiResponse({
    status: 201,
    description: 'Le ${entity.nameKebabCase} a été créé avec succès.',
    type: Response${entity.namePascalCase}Dto, // Correction du type de retour pour Swagger
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide. Vérifiez les données fournies.',
  })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async create(@Body() create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto): Promise<Response${entity.namePascalCase}Dto> {
    return await this.${entity.nameCamelCase}Service.create(create${entity.namePascalCase}Dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Récupérer tous les ${entity.nameKebabCase}s', description: 'Retourne une liste de tous les ${entity.nameKebabCase}s enregistrés dans le système.' })
  @ApiResponse({
    status: 200,
    description: 'Liste des ${entity.nameKebabCase}s récupérée avec succès.',
    type: [Response${entity.namePascalCase}Dto], // Indique un tableau de Response${entity.namePascalCase}Dto
  })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async findAll(): Promise<Response${entity.namePascalCase}Dto[]> {
    return await this.${entity.nameCamelCase}Service.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Récupérer un ${entity.nameKebabCase} par ID', description: 'Retourne les détails d un ${entity.nameKebabCase} spécifique en utilisant son ID.' })
  @ApiParam({
    name: 'id',
    description: 'ID du ${entity.nameKebabCase} à récupérer',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Le ${entity.nameKebabCase} a été récupéré avec succès.',
    type: Response${entity.namePascalCase}Dto,
  })
  @ApiResponse({ status: 404, description: '${entity.namePascalCase} non trouvé.' })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Response${entity.namePascalCase}Dto> {
    return await this.${entity.nameCamelCase}Service.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mettre à jour un ${entity.nameKebabCase}', description: 'Met à jour partiellement ou complètement un ${entity.nameKebabCase} existant en utilisant son ID.' })
  @ApiParam({
    name: 'id',
    description: 'ID du ${entity.nameKebabCase} à mettre à jour',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Le ${entity.nameKebabCase} a été mis à jour avec succès.',
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
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content pour une suppression réussie
  @ApiOperation({ summary: 'Supprimer un ${entity.nameKebabCase}', description: 'Supprime un ${entity.nameKebabCase} du système en utilisant son ID.' })
  @ApiParam({
    name: 'id',
    description: 'ID du ${entity.nameKebabCase} à supprimer',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 204,
    description: 'Le ${entity.nameKebabCase} a été supprimé avec succès.',
  })
  @ApiResponse({ status: 404, description: '${entity.namePascalCase} non trouvé.' })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur.' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.${entity.nameCamelCase}Service.remove(id);
  }
}`;
}
