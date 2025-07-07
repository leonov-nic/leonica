import { Injectable } from '@nestjs/common';

import { UserEntity } from './user.entity';
import { User } from '../../types';

@Injectable()
export class UserFactory {
  public create(entityPlainData: User) {
    return new UserEntity(entityPlainData);
  }
}
