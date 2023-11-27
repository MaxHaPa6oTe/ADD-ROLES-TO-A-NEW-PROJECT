import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import 'reflect-metadata';

// Your other imports and initialization code
// comes here after you imported the reflect-metadata package!
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(3123);
}
bootstrap();
