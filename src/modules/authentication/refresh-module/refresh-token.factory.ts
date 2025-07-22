import { Injectable } from '@nestjs/common';

import { JwtToken } from '../../../types/jwt-token.interface'
import { RefreshTokenEntity } from './refresh-token.entity';

@Injectable()
export class RefreshTokenFactory {
  public create(entityPlainData: JwtToken): RefreshTokenEntity {
    return new RefreshTokenEntity(entityPlainData);
  }
}
