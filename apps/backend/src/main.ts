import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// TODO backendのコードをpacakges/backendに移動する
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
