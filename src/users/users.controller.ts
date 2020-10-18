import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDTO, UserDTO } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getMany(): Promise<UserDTO[]> {
    return this.userService.getMany();
  }

  @Post()
  create(@Body() payload: UserCreateDTO): Promise<UserDTO> {
    return this.userService.create(payload);
  }
}
