import { Detail } from '../../types';

export class DetailEntity implements Detail {
  public id?: string;
  public shortName: string;
  public longName: string;
  public normOfMinute: number | null;
  public customer: string;

  public createdAt?: Date;
  public updatedAt?: Date;



  constructor(data: Detail) {
    this.populate(data);
  }

  public populate(data: Detail): void {
    if (!data) { return; }

    this.id = data.id || '';
    this.shortName = data.shortName;
    this.longName = data.longName;
    this.normOfMinute = data.normOfMinute ??  null;
    this.customer = data.customer;

    this.createdAt = data.createdAt ?? new Date();
    this.updatedAt = data.updatedAt ?? new Date();
  }

  public toPOJO(): Detail {
    return {
      id: this.id,
      shortName: this.shortName,
      longName: this.longName,
      normOfMinute: this.normOfMinute,
      customer: this.customer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
