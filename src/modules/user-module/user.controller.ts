import { Controller, NotFoundException, Get, Param, HttpStatus } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserRdo } from '../authentication/rdo/user.rdo';

import { fillDto } from '../../helpers/common';


@Controller('users')
export class UserController {
  constructor(
    private readonly userServiceRepository: UserRepository
  ) {}

  @Get(':email')
  public async show(@Param('email') email: string) {
    const user = await this.userServiceRepository.findByEmail(email)
    return user && fillDto(UserRdo, user.toPOJO());
  }
}
