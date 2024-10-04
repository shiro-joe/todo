import { Module } from '@nestjs/common';
import { databaseModule } from './database';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [databaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
