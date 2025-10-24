import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({
        example: 'Default Task',
        description: 'Name for new task'
    })
    name: string;

    @ApiProperty({
        example: 'low',
        description: 'Type priority'
    })
    priority: 'low' | 'medium' | 'hight';

    @ApiProperty({
        example: 'false',
        description: 'Status for task'
    })
    done: boolean = false
}
