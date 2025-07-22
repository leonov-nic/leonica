import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_PORT = 3014;
const DEFAULT_HOST = '127.0.0.1';

enum ENVIRONMENTS {
  Development = 'development',
  Production = 'production',
  Stage = 'stage'
};

export interface AppConfig {
  environment: string;
  port: number;
  host: string;
}

const validationSchema = Joi.object({
  environment: Joi.string().valid(...Object.values(ENVIRONMENTS)).required(),
  port: Joi.number().port().default(DEFAULT_PORT),
  host: Joi.string().default(DEFAULT_HOST),
});

function validateConfig(config: AppConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Application Config Validation Error,]: ${error.message}`);
  }
}

function getConfig(): AppConfig {

  const config: AppConfig = {
    environment: process.env['NODE_ENV'] as ENVIRONMENTS,
    host: process.env['HOST'] as string,
    port: parseInt(process.env['PORT'] || `${DEFAULT_PORT}`, 10),
  };

  validateConfig(config);
  return config;
}

export default registerAs('app', getConfig);
