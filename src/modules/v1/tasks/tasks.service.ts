import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { filter } from 'rxjs';

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

    public async findByFilters(
        user: User,
        page: number,
        limit: number,
        priority?: 'low' | 'medium' | 'hight',
        done?: boolean
    ): Promise<Task[]>  {

        const where: FindOptionsWhere<Task> = {
            fk_user: user.pk_user
        }

        if (priority) {
            where.priority = priority
        }
        if (done) {
            where.done = done
        }
        
        if (page && limit) {
            return this.repository.find({
                where: where,
                skip: (page - 1) * limit,
                take: limit,
                order: { pk_task: 'ASC' }
            });
        } else {
            return this.repository.findBy(where)
        }
    }

    public async findOneById(pk_task: number, fk_user: number): Promise<Task|null> {
        return this.repository.findOneBy({ pk_task, fk_user});
    }

    public async deleteOne(task: Task) {
        await this.repository.remove(task);
    }
}
