import {
  Controller,
  Get,
  Post,
  Delete,
  Req,
  Res,
  Render,
  Redirect,
} from '@nestjs/common';
// import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { TasksService } from './tasks/tasks.service';
import { CategoriesService } from './categories/categories.service';
import { Response } from 'express';
import { Request } from 'express';

@Controller()
export class AppController {
  private userId: number = 0;

  constructor(
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get('/')
  async get(@Req() req: Request, @Res() res: Response) {
    if (this.userId === 0) {
      res.redirect('/sign-in');
    } else {
      res.redirect('/home');
    }
  }

  @Get('/sign-in')
  @Render('sign-in')
  async getSignIn() {
    const users = this.usersService.findAll();
    return { users: users };
  }

  @Post('/sign-in')
  async postSignIn(@Req() req: Request, @Res() res: Response) {
    try {
      this.userId = (await this.usersService.findOne(req.body.name)).get('id');
      res.redirect('/home');
    } catch (error) {
      res.redirect('/sign-in');
    }
  }

  @Get('/home')
  @Render('home')
  async getHome(@Req() req: Request, @Res() res: Response) {
    if (this.userId === 0) {
      res.redirect('/sign-in');
    }
    if (!req.query.categryId) {
      return {
        tasks: this.tasksService.selectByUserId(this.userId),
        categories: this.categoriesService.selectByUserId(this.userId),
      };
    } else {
      const categoryId = Number(req.query.categoryId);
      return {
        tasks: this.tasksService.selectByUserIdAndCategoryId(
          this.userId,
          categoryId,
        ),
        categories: this.categoriesService.selectByUserId(this.userId),
      };
    }
  }

  @Post('/users')
  async postUsers(@Req() req: Request, @Res() res: Response) {
    const name = req.body.name;
    const password = req.body.password;
    this.usersService.addUser(name, password);
    res.redirect('/sign-in');
  }

  @Post('/tasks')
  async postTasks(@Req() req: Request, @Res() res: Response) {
    const title = req.body.title;
    const categoryId = req.body.categoryId;
    const content = req.body.content;
    const deadline = req.body.deadline;
    this.tasksService.addTask(
      this.userId,
      categoryId,
      title,
      content,
      deadline,
    );
    res.redirect('/home');
  }

  @Post('/categories')
  async postCategories(@Req() req: Request, @Res() res: Response) {
    const name = req.body.name;
    this.categoriesService.addCategory(this.userId, name);
    res.redirect('/home');
  }

  @Delete('/tasks')
  async deleteTasks(@Req() req: Request, @Res() res: Response) {
    const title = req.body.title;
    this.tasksService.deleteTask(this.userId, title);
    res.redirect('/home');
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
