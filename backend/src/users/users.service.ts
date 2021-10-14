import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            "id": 1,
            "name": "Jordi",
            "email": "jordicantogalvez@gmail.com",
            "password": "lespaul"
        },
        {
            "id": 2,
            "name": "Josete",
            "email": "jordicantogalvez@gmail.com",
            "password": "lespaul"
        },
        {
            "id": 3,
            "name": "Pablo",
            "email": "jordicantogalvez@gmail.com",
            "password": "lespaul"
        }                
    ];

    findOne(id: number): User {
        return this.users.find(user => user.id === id);
    }

    findAll(): User[] {
        return this.users;
    }
}
