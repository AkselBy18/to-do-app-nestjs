export class CreateTaskDto {
    name: string;
    priority: 'low' | 'medium' | 'hight';
    done: boolean = false
}
