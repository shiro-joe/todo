import { Module } from '@nestjs/common';
import { featureUser } from './users.feature';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [featureUser],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {
  constructor() {
    console.log('UsersModuleのコンストラクタ呼び出し');
  }
}
