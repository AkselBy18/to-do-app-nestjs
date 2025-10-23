import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return `
      <h1>Welcome to ToDoApp API</h1>
      <p>API running successfully!</p>
      <a href="/v1/docs">Open Swagger Docs</a>
    `;

  }
}
