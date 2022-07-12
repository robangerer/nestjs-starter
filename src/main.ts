import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Nestjs Crud')
    .setDescription('Api Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
