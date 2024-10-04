import { Module } from '@nestjs/common';
import { databaseModule } from './database';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [databaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
