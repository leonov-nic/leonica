export interface JwtToken {
  id?: string;
  tokenId: string;
  createdAt: Date;
  userId: unknown;
  expiresIn: Date;
}
  