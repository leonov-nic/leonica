import { Controller, Body, Query, Delete, Post, Get, Request, Put, Param, HttpStatus, UseGuards, HttpCode, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { RequestWithUser, TokenPayload } from '../../types';
import { JwtRefreshGuard, JwtAuthGuard, LocalAuthGuard, MongoIdValidationPipe } from 'src/libs';

import { AuthenticationService } from './authentication.service';
import { fillDto }  from '../../helpers/common';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Request() { user: payload }: RequestWithUser) {
    return payload;
  }


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

  @UseGuards(JwtAuthGuard)
  @Delete('logout')
  async logout(@Request() {user}) {
    const userId = user.sub
    if (typeof userId !== 'string') {
      throw new HttpException('Invalid token payload: sub does not exist', HttpStatus.BAD_REQUEST);
    }
    await this.authService.logout(userId);
    return { message: 'Logout successful' };
  }

  @UseGuards(LocalAuthGuard)
  @UseGuards(AuthGuard('local'))
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
}
