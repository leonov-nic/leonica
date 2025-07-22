import Joi from "joi";
import { registerAs } from "@nestjs/config";

export interface NotifyConfig {
  domen?: string;  
}

const validationSchema = Joi.object({
  domen: Joi.string().required()
})

function validateConfig(config: NotifyConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[NotifyConfig Validation Error]: ${error.message}`);
  }
}

function getConfig(): NotifyConfig {
  const config = {
    domen: process.env['DOMEN']
  }
  validateConfig(config);
  return config;
}

export default registerAs('notify', getConfig);