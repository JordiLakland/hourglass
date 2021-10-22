import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async findOne(id: number): Promise<UserEntity>  {
        const user: UserEntity = await this.userRepository.findOne(id);

        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    async findAll(): Promise<UserEntity[]> {
        const users: UserEntity[] = await this.userRepository.find();

        if (!users) {
            throw new NotFoundException();
        }
        return users;
    }
}
