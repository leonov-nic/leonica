import { Module } from '@nestjs/common';
// import { HttpModule } from '@nestjs/axios';

import { CatRepository } from './cat.repository';
import { CatController } from './cat.controller';
import { PrismaClientModule } from '../../assets/prisma/prisma-client-module/prisma-client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [CatController],
  providers: [CatRepository],
  exports: [CatRepository],
})
export class CatModule {}