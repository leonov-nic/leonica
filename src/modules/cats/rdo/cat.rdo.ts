import { Expose } from 'class-transformer';

export class CatRdo {
  @Expose()
  public userId!: string;

  @Expose()
  public titleText!: string;

  @Expose()
  public text!: string;

  @Expose()
  public createdAt!: Date;

  @Expose()
  public likesCount!: number;
}
