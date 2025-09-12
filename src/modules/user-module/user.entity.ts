import { Injectable } from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User, UserType } from '../../types';

export const SALTS = 14;

@Injectable()
export class UserEntity {
  public _id: string;
  public email!: string;
  public name!: string;
  public avatar?: string;
  public postsCount!: number;
  public subscribers?: string[] | null;
  public subscriptions?: string[] | null;
  public passwordHash!: string;
  public userType: UserType;
  public isActive: boolean;
  public activationToken: string | null;

  constructor(user: User) {
    this.populate(user);
  }

  public populate(user: User): void {
    if (!user) { return; }

    this._id = user._id || '';
    this.email = user.email;
    this.name = user.name;
    this.avatar = user.avatar;
    this.passwordHash = user.passwordHash;
    this.postsCount = user.postsCount;
    this.subscribers = user.subscribers || null;
    this.subscriptions = user.subscriptions || null;
    this.isActive = user.isActive || false;
    this.userType = user.userType;
    this.activationToken = user.activationToken || null;
  }

  public toPOJO() {
    return {
      _id: this._id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      postsCount: this.postsCount,
      subscribers: this.subscribers,
      subscriptions: this.subscriptions,
      userType: this.userType,
      isActive: this.isActive,
      activationToken: this.activationToken
    };
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALTS);
    this.passwordHash = await hash(password, salt);
    await this.setActivationToken();
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public async setActivationToken(): Promise<string | null> {
    this.activationToken = uuidv4();
    if (typeof this.activationToken === 'string') {return this.activationToken}
    return null;
  }
}
