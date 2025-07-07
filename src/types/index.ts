export { TokenPayload } from "./token-payload.interface";
export { Token } from "./token.interface";
export { JwtToken } from "./jwt-token.interface";
export { RequestWithUser } from "./request-with-user.interface";
export { StorableEntity } from "./storable-entity.interface";
export { RefreshTokenPayload } from "./refresh-token-payload.interface";
export { MongoRepository } from "./mongo.repository.interface";
export { EntityFactory } from "./entity-factory-interface";


export interface User {
  _id?: string;
  email: string;
  name: string;
  avatar?: string;
  postsCount: number;
  subscribers?: string[] | null;
  subscriptions?: string[] | null;
  passwordHash: string;
  userType: UserType;
  isActive: boolean;
  activationToken: string | null;
}

export enum UserType {
  Admin = 'admin',
  Regular = 'regular',
}

// export type TUserType  = typeof TYPES[number];

export interface Cat {
  id?: string;
  userId: string;

  titleText: string;
  text: string;

  createdAt?: Date;
  updatedAt?: Date;
  
  likesCount: number;
}

export interface Detail {
  id?: string;
  shortName: string;
  longName: string;
  normOfMinute: number | null;
  customer: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export enum SortType {
  Down = -1,
  Up = 1,
}

export type ValidationErrorField = {
  property: string;
  value: string;
  messages: string[];
};

