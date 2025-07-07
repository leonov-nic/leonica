import { IsNumber, IsOptional, IsString, Max, Min, validateOrReject } from 'class-validator';
import { MongoConfigurationPorts } from '../../types/const';

export class MongoConfiguration {
  @IsString({ message: 'Env Validation Required' })
  public name!: string;

  @IsString({ message: 'Env Validation Required' })
  public host!: string;

  @IsNumber({}, { message: 'Env Validation Required' })
  @Min(MongoConfigurationPorts.MIN_PORT)
  @Max(MongoConfigurationPorts.MAX_PORT)
  @IsOptional()
  public port: number = MongoConfigurationPorts.DEFAULT_MONGO_PORT;

  @IsString({ message: 'Env Validation Required' })
  public user!: string;

  @IsString({ message: 'Env Validation Required' })
  public password!: string;

  @IsString({ message: 'Env Validation Required' })
  public authBase!: string;

  public async validate(): Promise<void> {
    try {
      await validateOrReject(this);
    } catch (errors) {
      console.warn('Async validateOrReject() - Validation failed. Errors: ', errors);
    }
  }
}
