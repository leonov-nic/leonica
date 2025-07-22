import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserFactory } from './user.factory';
import { UserSchema, UserModel } from './user-model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: UserModel.name, schema: UserSchema }
  ])],
  controllers: [UserController],
  providers: [UserRepository, UserFactory],
  exports: [UserRepository],
})
export class UserModule {}
