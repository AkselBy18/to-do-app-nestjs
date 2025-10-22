import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('ToDoApp Backend')
    .setDescription('')
    .setVersion('1.0')
    .addServer('/v1')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/docs', app, document, {
    swaggerOptions: {
      basePath: 'v1'
    }
  });
  app.setGlobalPrefix('v1');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
