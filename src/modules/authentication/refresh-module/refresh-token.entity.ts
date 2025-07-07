import { JwtToken } from '../../../types/jwt-token.interface'

export class RefreshTokenEntity {
  public id?: string;
  public tokenId: string;
  public createdAt: Date;
  public userId: unknown;
  public expiresIn: Date;

  constructor(token?: JwtToken) {
    this.populate(token);
  }

  public populate(token?: JwtToken): void {
    if (!token) { return; }

    this.id = token.id ?? '';
    this.createdAt = token.createdAt;
    this.expiresIn = token.expiresIn;
    this.userId = token.userId ?? '';
    this.tokenId = token.tokenId;
  }

  public toPOJO(): JwtToken {
    return {
      id: this.id,
      createdAt: this.createdAt,
      expiresIn: this.expiresIn,
      userId: this.userId,
      tokenId: this.tokenId,
    }
  }
}
