import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User, UserType } from '../../types/index';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document implements Omit<User, '_id'> {
  @Prop({
    required: true,
    unique: true,
  })
  public email!: string;

  @Prop({
    required: true,
  })
  public name!: string;

  @Prop()
  public avatar?: string;

  @Prop()
  public postsCount!: number;

  @Prop()
  public subscribers?: string[];

  @Prop()
  public subscriptions?: string[];

  @Prop()
  public passwordHash!: string;

  @Prop()
  public isActive: boolean; 

  @Prop({type: String, enum: UserType })
  public userType!: UserType;

  @Prop({ type: String, default: null, required: false })
  public activationToken: string | null;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

// UserSchema.pre<UserModel>('save', function (next) {
//   if (!this.id && this._id) {
//     // @ts-ignore
//     this.id = this._id.toString();
//   }
//   next();
// });
