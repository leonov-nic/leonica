import { MinLengthCheck, MaxLengthCheck }  from '../../../types/const';
import { MaxLength, MinLength, IsMongoId } from 'class-validator';

export class ChangePasswordDto {
  public oldPassword!: string;

  @MinLength(MinLengthCheck.Password)
  @MaxLength(MaxLengthCheck.Password)
  public newPassword!: string;

  @IsMongoId()
  public _id!: string;
}
