import { Body, Controller, Headers, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ResponseHandler } from 'src/common/utils/response-handler.util';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }


  @Post('create')
  async create(@Headers('token') token: string, @Body() body: CreateTodoDto) {
    try {
      return ResponseHandler.success(
        await this.todoService.processCreate(body, token),
        'Success request create todo'
      )
    } catch (error) {
      return ResponseHandler.error('Error create todo: ' + (error.message ?? JSON.stringify(error)), error.status || 500)
    }
  }

  @Patch('update/:id')
  async update(
    @Headers('token') token: string,
    @Param('id') id: number,
    @Body() body: UpdateTodoDto
  ) {
    try {
      return ResponseHandler.success(
        await this.todoService.processUpdate(token, id, body),
        'Success request update todo'
      )
    } catch (error) {
      return ResponseHandler.error('Error update todo: ' + (error.message ?? JSON.stringify(error)), error.status || 500)
    }
  }
}
