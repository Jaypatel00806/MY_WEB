import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  await app.listen(3001, '0.0.0.0');

  console.log('Backend running → http://127.0.0.1:3001');
}
bootstrap();
