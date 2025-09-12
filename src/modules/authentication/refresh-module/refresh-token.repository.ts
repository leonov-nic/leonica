import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRefreshTokenRepository } from '../../../libs/repository/base.mongo.refreshToken.repository';
import { RefreshTokenEntity } from './refresh-token.entity';
import { RefreshTokenModel } from './refresh-token.model';
import { RefreshTokenFactory } from './refresh-token.factory';

@Injectable()
//@ts-ignore
export class RefreshTokenRepository extends BaseMongoRefreshTokenRepository<RefreshTokenEntity, RefreshTokenModel> {
  constructor(
    entityFactory: RefreshTokenFactory,
    @InjectModel(RefreshTokenModel.name) refreshModel: Model<RefreshTokenModel>
    ) {
    super(entityFactory, refreshModel);
  }


  public async deleteByTokenId(tokenId: string) {
    return this.model.deleteOne({ tokenId }).exec();
  }

  public async findByTokenId(tokenId: string): Promise<RefreshTokenEntity | null> {
    //@ts-ignore
    const refreshTokenDocument = await this.model.findOne({ tokenId }).exec();
    if (!refreshTokenDocument) {return null; }
    return this.createEntityFromDocument(refreshTokenDocument);
    // return this.entityFactory.create(refreshTokenDocument);
  }

  public async findByUserId(userId: string): Promise<RefreshTokenEntity | null> {
    //@ts-ignore
    const refreshTokenDocument = await this.model.findOne({ userId }).exec();
    if (!refreshTokenDocument) {return null; }
    return this.createEntityFromDocument(refreshTokenDocument);
    // return this.entityFactory.create(refreshTokenDocument);
  }


  public async deleteExpiredTokens(): Promise<void> {
    this.model.deleteMany({ expiresIn: { $lt: new Date()}})
  }
}
