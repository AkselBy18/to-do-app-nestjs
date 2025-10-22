import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task) private readonly repository: Repository<Task>
    ) { }


    //MARK: PUBLIC METHODS -------------------------------------------------------
    public async insert(data: CreateTaskDto, user: User) {
        const task = this.repository.create(data);
        task.fk_user = user.pk_user;
        return this.repository.save(task);
    }

    public async findById(id: number): Promise<Task | null> {
        return this.repository.findOneBy({ pk_task: id });
    }

    public async update(data: Task) {
        const task = await this.repository.preload({...data});
        if (!task) throw new Error('Task not found');
        return this.repository.save(task);
    }
}
