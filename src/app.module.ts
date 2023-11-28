import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { WorkerModule } from './worker/worker.module';
import { MulterModule } from '@nestjs/platform-express'
@Module({
  imports: [AuthModule, ConfigModule.forRoot(), 
  WorkerModule, MulterModule.register({dest:'./uploads'})],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
