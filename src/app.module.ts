import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HealthModule } from './modules/health/health.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user-module/user.module';
import { CatModule } from './modules/cats/cat.module';
import { DetailModule } from './modules/details/detail.module';
import { ConfigAppModule } from './libs/config/config.module';
import { getMongooseOptions } from './libs/config/get-mongoose-options';

@Module({
  imports: [
    HealthModule,
    UserModule, 
    AuthenticationModule, 
    ConfigAppModule, 
    CatModule,
    DetailModule,
    MongooseModule.forRootAsync(getMongooseOptions())
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
