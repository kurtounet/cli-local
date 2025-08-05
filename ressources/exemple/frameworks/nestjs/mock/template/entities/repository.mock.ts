import { IEntityJson } from '@interfaces/entityJson.interface';

export function repositoryNestMock(entity: IEntityJson) {
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

    return `repository${entity.namePascalCase}.ts`;
}

/*
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
