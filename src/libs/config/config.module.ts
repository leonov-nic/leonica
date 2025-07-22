import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from './app.config';
import mongoConfig from './mongo.config';
import jwtConfig from './jwt.config';
import notifyConfig from './notify.config';
// import rabbitConfig from '../rabbit/rabbit.config';

const ENV_USER_FILE_PATH = './src/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, mongoConfig, jwtConfig, notifyConfig],
      envFilePath: ENV_USER_FILE_PATH
    }),
  ]
})
export class ConfigAppModule {}
