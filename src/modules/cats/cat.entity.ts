import { Cat } from '../../types';

export class CatEntity implements Cat {
  public id?: string;
  public userId!: string;

  public titleText: string;
  public text: string;

  public createdAt?: Date;
  public updatedAt?: Date;

  public likesCount!: number;

  constructor(data: Cat) {
    this.populate(data);
  }

  public populate(data: Cat): void {
    if (!data) { return; }

    this.id = data.id || '';
    this.userId = data.userId;

    this.titleText = data.titleText;
    this.text = data.text;

    this.createdAt = data.createdAt ?? new Date();
    this.updatedAt = data.updatedAt ?? new Date();

    this.likesCount = data.likesCount || 0;
  }

  public toPOJO(): Cat {
    return {
      id: this.id,
      userId: this.userId,
      titleText: this.titleText,
      text: this.text,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      likesCount: this.likesCount,
    };
  }
}
