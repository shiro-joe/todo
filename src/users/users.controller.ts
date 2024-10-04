import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("/users")
export class UsersController {
    constructor(private readonly usersService: UsersService){
        console.log("UsersControllerのコンストラクタ呼び出し");
    }

    @Get()
    findAll() {
        console.log("findAll呼び出し");
        return this.usersService.findAll();
    }
}