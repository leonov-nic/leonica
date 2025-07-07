import { UserEntity } from '../modules/user-module/user.entity';

export interface RequestWithUser {
  user?: UserEntity;
}
