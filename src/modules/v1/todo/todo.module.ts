import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TasksModule } from '../tasks/tasks.module';
import { CommonModule } from 'src/common/common.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[
    TasksModule,
    CommonModule,
    UsersModule,
    TasksModule
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
