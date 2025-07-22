import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService as NestConfigService } from '@nestjs/config';

export const GLOBAL_PREFIX = 'api';
export const CONFIG_SERVICE: string = 'app.port';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  const configService = app.get(NestConfigService);
  const port = configService.get(CONFIG_SERVICE);

  await app.listen(port ?? 3000, 'localhost');
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${GLOBAL_PREFIX}`);
}
bootstrap();
