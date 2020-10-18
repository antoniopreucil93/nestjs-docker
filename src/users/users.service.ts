import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly usersRepository: UserRepository,
  ) {}

  getMany(): Promise<UserDTO[]> {
    return this.usersRepository.find();
  }

  create(payload) {
    return this.usersRepository.save(payload);
  }
}
