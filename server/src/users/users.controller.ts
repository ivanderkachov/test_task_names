import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-users.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { UsersService } from './users.service';

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}


  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get("/email")
  getUserByEmail(@Body() userDto: SearchUserDto) {
    return this.userService.getUserByEmail(userDto.email);
  }

  @Delete("/:id")
  deleteUser(@Param() param) {
    return this.userService.deleteUser(param.id);
  }
}
