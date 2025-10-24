import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({
        example: 'Default Task',
        description: 'Name for new task'
    })
    name?: string;

    @ApiProperty({
        example: 'low',
        description: 'Type priority'
    })
    priority?: 'low' | 'medium' | 'hight' | undefined;


    @ApiProperty({
        example: 'false',
        description: 'Status for task'
    })
    done?: boolean | undefined;
}
