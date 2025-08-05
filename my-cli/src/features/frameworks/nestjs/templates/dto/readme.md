import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDate, MaxLength, Min, Max } from 'class-validator';

export class TaskDetailsResponseDto {
  @ApiProperty({ description: 'Unique identifier for the task' })
  id: number;

  @ApiProperty({ description: 'Task name', maxLength: 300 })
  name: string;

  @ApiProperty({ description: 'Task description', required: false })
  description?: string;

  @ApiProperty({ description: 'Current status of the task', required: false })
  status?: string;

  @ApiProperty({ description: 'Task priority level', required: false })
  priority?: string;

  @ApiProperty({ description: 'Task completion progress (0-100)', required: false, minimum: 0, maximum: 100 })
  progress?: number;

  @ApiProperty({ description: 'Due date for the task', required: false })
  due_date?: Date;

  @ApiProperty({ description: 'When the task was created' })
  created_at: Date;

  @ApiProperty({ description: 'When the task was last updated' })
  updated_at: Date;

  @ApiProperty({ description: 'Name of the project this task belongs to', maxLength: 200 })
  project_name: string;

  @ApiProperty({ description: 'ID of the project this task belongs to' })
  project_id: number;

  @ApiProperty({ description: 'Name of the user who created the task', required: false, maxLength: 201 })
  created_by_name?: string;

  @ApiProperty({ description: 'Name of the user assigned to the task', required: false, maxLength: 201 })
  assigned_to_name?: string;

  @ApiProperty({ description: 'Email of the user assigned to the task', required: false, maxLength: 255 })
  assigned_to_email?: string;

  @ApiProperty({ description: 'Urgency status of the task', maxLength: 9 })
  urgency_status: string;

  @ApiProperty({ description: 'Total hours logged on this task', minimum: 0 })
  total_hours_logged: number;

  @ApiProperty({ description: 'Number of comments on this task', minimum: 0 })
  comment_count: number;

  @ApiProperty({ description: 'Number of subtasks under this task', minimum: 0 })
  subtask_count: number;
}

export class CreateTaskDetailsDto {
  @ApiProperty({ description: 'Task name', maxLength: 300 })
  @IsString()
  @MaxLength(300)
  name: string;

  @ApiProperty({ description: 'Task description', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Current status of the task', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  status?: string;

  @ApiProperty({ description: 'Task priority level', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  priority?: string;

  @ApiProperty({ description: 'Task completion progress (0-100)', required: false, minimum: 0, maximum: 100 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  progress?: number;

  @ApiProperty({ description: 'Due date for the task', required: false })
  @IsOptional()
  @IsDate()
  due_date?: Date;

  @ApiProperty({ description: 'ID of the project this task belongs to' })
  @IsNumber()
  project_id: number;

  @ApiProperty({ description: 'Urgency status of the task', maxLength: 9 })
  @IsString()
  @MaxLength(9)
  urgency_status: string;
}