import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UserModule } from '../user-module/user.module';
import { NotifyModule } from '../notify/notifi.module';
import { RefreshTokenModule } from './refresh-module/refresh-token.module';

import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

import { getJwtOptions } from './strategies/get-jwt-options';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    UserModule,
    NotifyModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    RefreshTokenModule
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtAccessStrategy, LocalStrategy, JwtRefreshStrategy],
  exports: [AuthenticationService],
})

export class AuthenticationModule {}
