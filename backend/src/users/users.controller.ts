import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) {};

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const data: UserEntity = await this.usersService.findOne(parseInt(id));
        return {
            message: 'Usuario existente',
            data: data
        }
    } 

    @Get()
    async findAll() {
        const data: UserEntity[] = await this.usersService.findAll();
        return {
            message: 'Petición correcta',
            data: data
        }
    }

    @Post()
    createOne(userData: CreateUserDto): Object {
        return {ok: 'createOne'};
    }

    @Put(':id')
    updateOne(@Param('id')id: string, user: CreateUserDto): Object {
        return {ok: 'updated'};
    }
}
