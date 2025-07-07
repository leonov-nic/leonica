import { Module } from '@nestjs/common';

import { DetailRepository } from './detail.repository';
import { DetailController } from './detail.controller';
import { PrismaClientModule } from '../../../prisma/prisma-client-module/prisma-client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [DetailController],
  providers: [DetailRepository],
  exports: [DetailRepository],
})
export class DetailModule {}