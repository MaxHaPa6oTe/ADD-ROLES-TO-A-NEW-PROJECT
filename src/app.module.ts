import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { WorkerModule } from './worker/worker.module';
import { OtmetkaModule } from './otmetka/otmetka.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), 
  WorkerModule, OtmetkaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
