import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UsersService } from '../users/users.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {

    constructor(
        private taskServices: TasksService,
        private userServices: UsersService
    ) { }

    //MARK: PUBLIC METHODS -------------------------------------------------------
    public async processCreate(data: CreateTodoDto, token: string) {
        const user = await this.userServices.findByToken(token);
        
        if (!user) {
            throw new HttpException('Cant get user', HttpStatus.NOT_FOUND)
        }
        
        if (!data.name?.trim() || !data.priority?.trim() ) {
            throw new HttpException('Invalid input data', HttpStatus.BAD_REQUEST)
        }

        return this.taskServices.insert(data, user);
    }
    
    public async processUpdate(token: string, id: number, data: UpdateTodoDto) {
        const user = await this.userServices.findByToken(token);

        if (!user) {
            throw new HttpException('Cant get user', HttpStatus.NOT_FOUND)
        }

        let task = await this.taskServices.findById(id);
        if (!task) {
            throw new HttpException('Cant get todo', HttpStatus.NOT_FOUND)
        }
        
        task = {
            ...task,
            ...data
        }

        return this.taskServices.update(task);
    }
}
