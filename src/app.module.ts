import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), 
  WorkerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
