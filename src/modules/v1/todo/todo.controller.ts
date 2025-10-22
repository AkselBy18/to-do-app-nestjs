import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query } from '@nestjs/common';
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

  @Get('list')
  async getAll(
    @Headers('token') token: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('priority') priority?: 'low' | 'medium' | 'hight',
    @Query('done') done?: boolean
  ) {
    try {
      return ResponseHandler.success(
        await this.todoService.processGetAll(token, page, limit, priority, done),
        'Success request get all'
      );
    } catch (error) {
      return ResponseHandler.error('Error get all todo: ' + (error.message ?? JSON.stringify(error)), error.status || 500)
    }
  }

  @Get('list/:id')
  async getOne(@Headers('token') token: string, @Param('id') id: number) {
    try {
      return ResponseHandler.success(
        await this.todoService.processGetOne(token, id),
        'Success request get todo'
      );
    } catch (error) {
      return ResponseHandler.error('Error get todo: ' + (error.message ?? JSON.stringify(error)), error.status || 500)
    }
  }

  @Delete('list/:id')
  async delete(@Headers('token') token: string, @Param('id') id: number) {
    try {
      return ResponseHandler.success(
        await this.todoService.processDelete(token, id),
        'Success request delete Todo'
      );
    } catch (error) {
      return ResponseHandler.error('Error delete todo: ' + (error.message ?? JSON.stringify(error)), error.status || 500)
    }
  }
}
