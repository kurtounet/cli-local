import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('task_details')
export class TaskDetails {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: number;

  @Column({ type: 'varchar', length: 300 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  status?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  priority?: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  progress?: number;

  @Column({ type: 'timestamp', nullable: true })
  due_date?: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;

  @Column({ type: 'varchar', length: 200 })
  project_name!: string;

  @Column({ type: 'bigint' })
  project_id!: number;

  @Column({ type: 'varchar', length: 201, nullable: true })
  created_by_name?: string;

  @Column({ type: 'varchar', length: 201, nullable: true })
  assigned_to_name?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  assigned_to_email?: string;

  @Column({ type: 'varchar', length: 9 })
  urgency_status!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total_hours_logged!: number;

  @Column({ type: 'bigint', default: 0 })
  comment_count!: number;

  @Column({ type: 'bigint', default: 0 })
  subtask_count!: number;
}