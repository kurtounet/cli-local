
import {
    IColumnJson,
    IEntityJson,
    IRelation,
    IRelationshipJson,
} from '@interfaces/entityJson.interface';
import { snakeToCamel, snakeToKebab, snakeToPascal } from '@services/convert';

const n = '\n';
const indent = '  ';
let arrayEntityImports: Set<string> = new Set<string>([]);
let arrayImports: Set<string> = new Set<string>([]);
type ValidatorMapping = {
    importDecorators: string[];
    validators: Validators;
};
type Validators = {
    name: string;
    typeSql: string;
    tsType: string;
    decorators: string[];
};
type TProperty = {
    name: string;
    nullable: string;
    typeSql: string;
    tsType: string;
    decorators: string[];
};
export function entityNestMock(entity: IEntityJson) {
    arrayEntityImports = new Set<string>([]);
    arrayImports = new Set<string>([
        'Entity',
        'Column',
        'PrimaryGeneratedColumn',
        'CreateDateColumn',
        'UpdateDateColumn',
    ]);
    let dtoProperties: TProperty[] = [];
    let relationships: string[] = []// getRelationShips(entity);

    console.log('relationships', relationships);


    const importClassValidators = new Set<string>();

    entity.columns?.map((column: IColumnJson) => {
        let nullable = column.nullable ? '?' : '!';
        let result = getColumnsDecorators(column);
        let property: TProperty = {
            name: column.name,
            nullable: nullable,
            typeSql: column.typeSql,
            tsType: column.typeTypeScript,
            decorators: result,
        };
        dtoProperties.push(property);
    });

    let entityImports = [
        `import { ApiProperty } from '@nestjs/swagger';`,
        `import {${n}${[...arrayImports].join(', \n')} } from 'typeorm';`,

    ];
    entityImports.push(...arrayEntityImports);


    return `${entityImports.map((importLine: string) => importLine).join('\n')}
@Entity('${entity.tableName}')
export class ${entity.namePascalCase} {
${dtoProperties.map((property: TProperty) => `${indent}${property.decorators}${n}${indent}${property.name}${property.nullable}: ${property.tsType};`).join('\n\n')}${n}
${relationships.join('\n')}${n}
}${n} `;
}

// export function buildRelation(type: string, inEntity: string, toEntity: string): string {
//     let relationType: string = '';
//     if (type === 'one-to-one') {
//         relationType = 'OneToOne';
//     } else if (type === 'one-to-many') {
//         relationType = 'OneToMany';
//     } else if (type === 'many-to-many') {
//         relationType = 'ManyToMany';
//     } else if (type === 'many-to-one') {
//         relationType = 'ManyToOne';
//     }
//     return `${relationType}(() => ${snakeToPascal(toEntity)}, (entity) => entity.${snakeToCamel(inEntity)})`;
// } 
export function buildImportEntity(entity: string): string {

    return `import { ${snakeToPascal(entity)} } from 'src/modules/${snakeToKebab(entity)}/entity/${snakeToKebab(entity)}.entity';`;
}
export function getRelationShips(entity: IEntityJson): string[] {
    let relationsShips: string[] = [];
    console.log(entity.tableName);
    entity.relationships?.map((relationship: IRelation) => {

        arrayImports.add(snakeToPascal(relationship.relationType));

        if (relationship.source !== entity.tableName) {

            arrayEntityImports.add(buildImportEntity(relationship.source));
        };
        if (relationship.target !== entity.tableName) {

            arrayEntityImports.add(buildImportEntity(relationship.target));
        };

        relationsShips.push(buildRelation(relationship.relationType, relationship.source, relationship.target));
    });
    return relationsShips;
}
export function getColumnsDecorators(column: IColumnJson): string[] {
    const decorators: string[] = [];

    let decorateurColumn = '@Column';
    if (column.name.toLowerCase().includes('created_at')) {
        decorateurColumn = '@CreateDateColumn';
    } else if (column.name.toLowerCase().includes('updated_at')) {
        decorateurColumn = '@UpdateDateColumn';
    }

    // Déterminer si c'est une clé primaire
    if (column.primaryKey) {
        decorators.push('@PrimaryGeneratedColumn()');
    } else {
        let columnOptions: string[] = [];

        // Type de colonne SQL
        if (column.typeSql.toLowerCase() === 'varchar' && column.length) {
            columnOptions.push(`type: 'varchar'`);
            columnOptions.push(`length: ${column.length} `);
        } else if (
            ['text', 'longtext'].includes(column.typeSql.toLowerCase())
        ) {
            columnOptions.push(`type: 'text'`);
        } else if (
            [
                'int',
                'integer',
                'smallint',
                'bigint',
                'decimal',
                'float',
                'double',
            ].includes(column.typeSql.toLowerCase())
        ) {
            columnOptions.push(`type: '${column.typeSql.toLowerCase()}'`);
        } else if (column.typeSql.toLowerCase() === 'boolean') {
            columnOptions.push(`type: 'boolean'`);
        } else if (
            ['datetime', 'timestamp'].includes(column.typeSql.toLowerCase())
        ) {
            columnOptions.push(`type: 'timestamp'`);
        } else if (['array<string>'].includes(column.typeSql.toLowerCase())) {
            columnOptions.push(`type: 'simple-array'`);
        } else if (['json'].includes(column.typeSql.toLowerCase())) {
            columnOptions.push(`type: 'simple-array'`);
        }

        // Ajout des contraintes
        if (column.nullable) {
            columnOptions.push(`nullable: true`);
        }
        if (column.unique) {
            columnOptions.push(`unique: true`);
        }

        // Assemblage final de @Column()
        decorators.push(`${decorateurColumn} ({ ${columnOptions.join(', ')} })`);
    }

    return decorators;
}

function mapSqlTypeToValidators(column: IColumnJson): ValidatorMapping {
    const type = column.typeSql.toUpperCase();
    const length = Number(column.length);
    const precision = Number(column.precision);
    let arrayImports: string[] = [];
    if (
        [
            'INT',
            'INTEGER',
            'SMALLINT',
            'TINYINT',
            'MEDIUMINT',
            'BIGINT',
        ].includes(type)
    ) {
        arrayImports.push('IsInt');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'number',
                decorators: [`${indent} @ApiProperty()`, `${indent} @IsInt()`],
            },
        };
    }
    if (['DECIMAL', 'NUMERIC'].includes(type)) {
        const decorators = [
            `${indent} @ApiProperty()`,
            `${indent} @IsNumber({
    allowInfinity: false, allowNaN: false`,
        ];
        if (typeof precision === 'number') {
            decorators[0] += `, maxDecimalPlaces: ${precision}`;
        }
        decorators[0] += ' })';
        arrayImports.push('IsNumber');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'number',
                decorators: decorators,
            },
        };
    }

    if (['FLOAT', 'REAL', 'DOUBLE'].includes(type)) {
        arrayImports.push('IsNumber');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'number',
                decorators: [`${indent}@ApiProperty()`, `${indent}@IsNumber()`],
            },
        };
    }
    if (type.startsWith('VARCHAR')) {
        if (length) {
            arrayImports.push('IsString', 'MaxLength');
        } else {
            arrayImports.push('IsString');
        }
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'string',
                decorators: length
                    ? [
                        `${indent}@ApiProperty()`,
                        `${indent}@IsString()`,
                        `${indent}@MaxLength(${length})`,
                    ]
                    : [`${indent}@ApiProperty()`, `${indent}@IsString()`],
            },
        };
    }

    if (type.startsWith('CHAR')) {
        arrayImports.push('IsString');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'string',
                decorators: length
                    ? [
                        `${indent}@ApiProperty()`,
                        `${indent}@IsString()`,
                        `${indent}@Length(${length}, ${length})`,
                    ]
                    : [`${indent}@ApiProperty()`, `${indent}@IsString()`],
            },
        };
    }

    if (['TEXT', 'TINYTEXT', 'MEDIUMTEXT', 'LONGTEXT'].includes(type)) {
        arrayImports.push('IsString');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'string',
                decorators: [`${indent}@ApiProperty()`, `${indent}@IsString()`],
            },
        };
    }

    if (['BOOLEAN', 'BIT'].includes(type)) {
        arrayImports.push('IsBoolean');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'boolean',
                decorators: [
                    `${indent}@ApiProperty()`,
                    `${indent}@IsBoolean()`,
                ],
            },
        };
    }

    if (['DATE', 'DATETIME', 'TIMESTAMP'].includes(type)) {
        arrayImports.push('IsISO8601');
        return {
            importDecorators: arrayImports,
            validators: {
                name: column.name,
                typeSql: type,
                tsType: 'string', // ou Date si tu fais du parsing
                decorators: [
                    `${indent}@ApiProperty()`,
                    `${indent}@IsISO8601()`,
                ],
            },
        };
    }

    // Valeur par défaut
    return {
        importDecorators: arrayImports,
        validators: {
            name: column.name,
            typeSql: type,
            tsType: 'any',
            decorators: [],
        },
    };
}

export function buildRelation(
    type: string,
    inEntity: string,
    toEntity: string,
): string {
    console.log(type, inEntity, toEntity);
    const n = '\n';
    let tab = '';
    let s = '';
    let ps = '';
    let isArray = false;
    if (type === 'OneToMany') {
        tab = '[]';
        s = 's';
        isArray = true;
    }
    if (type === 'ManyToOne') {
        tab = '';
        ps = 's';
    }
    return `${indent}@${type}(() => ${snakeToPascal(toEntity)}, (${snakeToCamel(toEntity)}) => ${snakeToCamel(toEntity)}.${snakeToCamel(inEntity)}${ps})
@ApiProperty({ type: () => ${snakeToPascal(toEntity)}, ${isArray ? 'isArray: true' : ''}})
  ${snakeToCamel(toEntity)}${s}: ${snakeToPascal(toEntity)}${tab};
`;
}
// export function getRelationType(
//     source_cardinality: string,
//     target_cardinality: string,
// ): string {
//     const mapping: Record<string, string> = {
//         '0..1-0..1': 'OneToOne (optionnel)',
//         '1..1-1..1': 'OneToOne (obligatoire)',
//         '0..*-0..1': 'ManyToOne',
//         '1..*-0..1': 'ManyToOne (obligatoire)',
//         '0..*-1..1': 'ManyToOne',
//         '1..*-1..1': 'ManyToOne (obligatoire)',
//         '0..1-0..*': 'OneToMany',
//         '1..1-0..*': 'OneToMany',
//         '0..*-0..*': 'ManyToMany',
//         '1..*-1..*': 'ManyToMany',
//     };
//     if (source_cardinality === undefined) {
//         source_cardinality = '1..1';
//     }
//     if (target_cardinality === undefined) {
//         target_cardinality = '1..1';
//     }
//     const key = `${ source_cardinality } -${ target_cardinality } `;
//     return mapping[key] || 'Unknown Relation';
// }
/*

// let imports = new Set();
    // imports.add("Entity");
    // imports.add("PrimaryGeneratedColumn");
    // if (entity.typeEntity === "entity") {
    //     imports.add("Column");
    //     imports.add("CreateDateColumn");
    //     imports.add("UpdateDateColumn");
    // }
    // let importsEntity = new Set();
    // entity.relationshipsEntity.relationships.forEach(relation => {
    //     importsEntity.add(relation[2].split(':')[1].replace('[]', '').replace(';', '').trim());
    //     if (relation[0].includes("OneToOne")) {
    //         imports.add("OneToOne");
    //         imports.add("JoinColumn");
    //     } else if (relation[0].includes("OneToMany")) {
    //         imports.add("OneToMany");
    //     } else if (relation[0].includes("ManyToOne")) {
    //         imports.add("ManyToOne");
    //         imports.add("JoinColumn");

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Post } from './post.entity';
import { Profile } from './profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  // Relation OneToMany avec Post
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  // Relation OneToOne avec Profile
  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile;
}
*/

// <%
// let imports = new Set();
// imports.add("Entity");
// imports.add("PrimaryGeneratedColumn");
// if (entity.typeEntity === "entity") {
//     imports.add("Column");
//     imports.add("CreateDateColumn");
//     imports.add("UpdateDateColumn");
// }
// let importsEntity = new Set();
// entity.relationshipsEntity.relationships.forEach(relation => {
//     importsEntity.add(relation[2].split(':')[1].replace('[]', '').replace(';', '').trim());
//     if (relation[0].includes("OneToOne")) {
//         imports.add("OneToOne");
//         imports.add("JoinColumn");
//     } else if (relation[0].includes("OneToMany")) {
//         imports.add("OneToMany");
//     } else if (relation[0].includes("ManyToOne")) {
//         imports.add("ManyToOne");
//     } else if (relation[0].includes("ManyToMany")) {
//         imports.add("ManyToMany");
//         imports.add("JoinTable");
//     }
// });
// %>
//     import { IEntityJson } from '@interfaces/entityJson.interface';
// import { <%= Array.from(imports).join(", ") %> } from "typeorm";
// <% importsEntity.forEach(impEntity => { %>
//     <% if (impEntity != entity.namePascalCase) { %>

//         import { <%= impEntity %> } from "@modules/<%= ejsHelpers.pascalToKebab(impEntity) %>/entities/<%= ejsHelpers.pascalToKebab(impEntity) %>.entity"

//         %>;
//     <% } %>
// <% }) %>
// import { ApiProperty } from '@nestjs/swagger';

// @Entity("<%= entity.tableName %>")
// export class <%= entity.namePascalCase %>{
// <% if (entity.typeEntity === "pivot") { %>
//     @PrimaryGeneratedColumn()
//     id: number;
// <% } %>
// <% entity.columns.forEach(column => { %>
//     <% if (column.foreignKey === false) { %>
//         <% column.propsEntiy.forEach(decorators => { %>
//             <%- decorators %>
//         <% }); %>
//         <%= column.name %>:<%= column.typeTypeScript %>
//     <% } %>
// <% }); %>

// <% entity.relationshipsEntity.relationships.forEach(relation => { %>
//     <%- relation[0] %>
//     <%- relation[1] %>
//     <%- relation[2] %>
// <% }); %>
