import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { UserLoginDto, VerifyEmailDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @Post()
  // async createUser(@Body() dto: CreateUserDto): Promise<void> {
  //   const { name, email, password } = dto;
  //   await this.userService.createUser(name, email, password);
  // }

  // @postMessage()
  // crete(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.userService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;

    return await this.userService.login(email, password);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<any> {
    return await this.userService.getUserInfo(userId);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
