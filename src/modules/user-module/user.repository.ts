import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserEntity } from './user.entity';
import { BaseMongoUserRepository } from '../../libs/repository/base.mongo.user.repository';
import { UserModel } from './user-model';

@Injectable()
// @ts-ignore
export class UserRepository extends BaseMongoUserRepository<UserEntity, UserModel> {

  constructor(
    @InjectModel(UserModel.name) userModel: Model<UserModel>
  ) {
    super(userModel);
  }

  public async findByEmail(email: string) {
    // @ts-ignore
    const document = await this.model.findOne({ email }).exec();
    if (!document) { return null; };
    // if (!document) { throw new NotFoundException(`User not found.`);};
    return this.createEntityFromDocument(document);
  }

  public async findByToken(token: string) {
    // @ts-ignore
    const document = await this.model.findOne({ activationToken: token }).exec();
    if (!document) { return null; };
    // if (!document) { throw new NotFoundException(`User not found.`);};
    return this.createEntityFromDocument(document);
  }
}
