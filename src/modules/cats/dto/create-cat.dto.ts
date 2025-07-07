import { 
  IsString,
  MaxLength, 
  MinLength,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  ValidateIf,
} from 'class-validator';


export class CreateCatDto {
  @IsString()
  @IsMongoId()
  public userId!: string;

  @ValidateIf(o => o.text !== "")
  @IsString()
  @MinLength(5)
  @MaxLength(40)
  @IsNotEmpty()
  public titleText!: string;

  @ValidateIf(o => o.titleText !== "")
  @IsString()
  @MinLength(20)
  @MaxLength(100)
  @IsNotEmpty()
  public text!: string;

  @IsOptional()
  @IsNumber()
  public likesCount?: number;
}
