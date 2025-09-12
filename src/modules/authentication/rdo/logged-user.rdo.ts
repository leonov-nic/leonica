import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  // @Expose()
  // public _id: string;

  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  public accessToken: string;

  @Expose()
  public refreshToken: string;

  @Expose()
  public userType: string;
}
