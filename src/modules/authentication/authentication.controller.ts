import { Controller, Body, Query, Post, Get, Request, Put, Param, HttpStatus, UseGuards, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { RequestWithUser } from '../../types';
import { JwtRefreshGuard, JwtAuthGuard, LocalAuthGuard, MongoIdValidationPipe } from 'src/libs';

import { AuthenticationService } from './authentication.service';
import { fillDto }  from '../../helpers/common';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillDto(UserRdo, newUser.toPOJO());
  }

  @Get('activate')
  async activate(@Query('token') token: string) {
    await this.authService.activateUser(token);
    return { message: 'Account activated successfully' };
  }

  @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() {user}: RequestWithUser) {
    const userToken = user && await this.authService.createUserToken(user);
    return fillDto(LoggedUserRdo, user && {...user.toPOJO(), ...userToken});
  }


  @UseGuards(JwtAuthGuard)
  @Get('/user/:id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const user = await this.authService.getUser(id);
    return fillDto(UserRdo, user.toPOJO());
  }

  @UseGuards(JwtAuthGuard)
  @Put('avatar/:userId')
  public async updateAvatar(@Param('userId') userId: string, @Body() dto) {
    return this.authService.updateAvatar(userId, dto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public async refreshToken(@Request() {user}: RequestWithUser) {
    return user && await this.authService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Request() { user: payload }: RequestWithUser) {
    return payload;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/demo/:id')
  public async demoPipe(@Param('id') id: number) {
    console.log(typeof id);
  }
}
