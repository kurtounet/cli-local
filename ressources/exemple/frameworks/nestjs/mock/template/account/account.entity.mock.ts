import { IEntityJson } from '@interfaces/entityJson.interface';

export function accountEntityJsonMock(): IEntityJson {
    //         return `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

    // @Entity()
    // export class Account {
    //   @PrimaryGeneratedColumn()
    //   id: number;

    //   @Column({ unique: true })
    //   email: string;

    //   @Column()
    //   password: string;

    //   @Column('simple-array')
    //   roles: string[];

    //   @Column('simple-json', { nullable: true })
    //   permissions: object;
    // }
    return {
        tableName: 'account',
        id: 'AAAAAAGWyaywbnyL5CE=',
        parent: 'AAAAAAGVUotf09MNbhU=',
        nameKebabCase: 'account',
        namePascalCase: 'Account',
        nameCamelCase: 'account',
        typeEntity: 'entity',
        columns: [
            {
                id: 'AAAAAAGWyazMiHyYZXY=',
                name: 'id',
                typeSql: 'int',
                typeTypeScript: 'number',
                typeDoctrine: 'number',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: true,
                foreignKey: false,
                length: null,
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: [],
                propsEntiy: ['@PrimaryGeneratedColumn()'],
            },
            {
                id: 'AAAAAAGWyazs6XyfXjU=',
                name: 'email',
                typeSql: 'varchar',
                typeTypeScript: 'string',
                typeDoctrine: 'string',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: '320',
                unique: true,
                nullable: false,
                referenceTo: '',
                validations: [
                    '@ApiProperty()',
                    '@IsString()',
                    '@MinLength(2)',
                    '@MaxLength(320)',
                    '@IsNotEmpty()',
                ],
                propsEntiy: [
                    "@Column({ type: 'varchar', length: 320, unique: true })",
                ],
            },
            {
                id: 'AAAAAAGWya8/JnzWFgg=',
                name: 'statut',
                typeSql: 'varchar',
                typeTypeScript: 'string',
                typeDoctrine: 'string',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: '50',
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: [
                    '@ApiProperty()',
                    '@IsString()',
                    '@MinLength(2)',
                    '@MaxLength(50)',
                    '@IsNotEmpty()',
                ],
                propsEntiy: ["@Column({ type: 'varchar', length: 50 })"],
            },
            {
                id: 'AAAAAAGWya0WenymxXI=',
                name: 'roles',
                typeSql: 'array<string>',
                typeTypeScript: 'string[]',
                typeDoctrine: 'string[]',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: null,
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: ['@ApiProperty()', '@IsNotEmpty()'],
                propsEntiy: ["@Column({ type: 'simple-array' })"],
            },
            {
                id: 'AAAAAAGWya18N3ytsYc=',
                name: 'password',
                typeSql: 'varchar',
                typeTypeScript: 'string',
                typeDoctrine: 'string',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: '255',
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: [
                    '@ApiProperty()',
                    '@IsString()',
                    '@MinLength(2)',
                    '@MaxLength(255)',
                    '@IsNotEmpty()',
                ],
                propsEntiy: ["@Column({ type: 'varchar', length: 255 })"],
            },
            {
                id: 'AAAAAAGWya2SlHy19Uc=',
                name: 'permission',
                typeSql: 'array<string>',
                typeTypeScript: 'string[]',
                typeDoctrine: 'string[]',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: null,
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: ['@ApiProperty()', '@IsNotEmpty()'],
                propsEntiy: ["@Column({ type: 'simple-array' })"],
            },
            {
                id: 'AAAAAAGWya25+Hy8z2U=',
                name: 'created_at',
                typeSql: 'datetime',
                typeTypeScript: 'Date',
                typeDoctrine: 'Date',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: null,
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: [],
                propsEntiy: ["@CreateDateColumn({ type: 'timestamp' })"],
            },
            {
                id: 'AAAAAAGWya4IEnzFXcE=',
                name: 'updated_at',
                typeSql: 'datetime',
                typeTypeScript: 'Date',
                typeDoctrine: 'Date',
                parent: 'AAAAAAGWyaywbnyL5CE=',
                primaryKey: false,
                foreignKey: false,
                length: null,
                unique: false,
                nullable: false,
                referenceTo: '',
                validations: [],
                propsEntiy: ["@UpdateDateColumn({ type: 'timestamp' })"],
            },
        ],
        relationships: [],
         
    };
}
export function accountEntityMock(): string {
    return `import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'active' })
  status: string;

  @Column('simple-array')
  roles: string[];

  @Column('json', { nullable: true })
  permissions: Record<string, boolean>;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
`;
}
