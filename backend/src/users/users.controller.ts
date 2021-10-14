import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {};

    @Get(':id')
    findOne(@Param('id') id: string): User {
        return this.usersService.findOne(parseInt(id));
    } 

    @Get()
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): string {
        console.log(createUserDto.name, createUserDto.email);
        return 'User Created';
    }
}
