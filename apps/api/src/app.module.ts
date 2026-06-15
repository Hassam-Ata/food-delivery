import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
