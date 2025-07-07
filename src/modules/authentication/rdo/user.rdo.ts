import { Expose, Transform  } from 'class-transformer';

export class UserRdo {
  @Expose()
  public _id: string;

  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  public avatar: string;

  @Expose()
  public postsCount: number = 0;

  @Expose()
  public subscribers: string[];

  @Expose()
  public subscriptions: string[];
}
