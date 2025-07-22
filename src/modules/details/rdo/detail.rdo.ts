import { Expose } from 'class-transformer';

export class DetailRdo {
  @Expose()
  public shortName!: string;

  @Expose()
  public longName!: string;

  @Expose()
  public normOfMinute!: number;

  @Expose()
  public customer!: string;

  @Expose()
  public createdAt!: Date;
}
