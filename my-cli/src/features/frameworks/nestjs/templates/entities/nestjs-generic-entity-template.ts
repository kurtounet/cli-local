export function getEntityTemplate(name: string): string {
  return `import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ${name} {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
`;
}
