import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {
    console.log('UsersServiceのコンストラクタ呼び出し');
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(name: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        name: name,
      },
    });
  }

  async addUser(name: string, password: string): Promise<void> {
    this.userModel.create({
      name: name,
      password: password,
    });
  }
}
