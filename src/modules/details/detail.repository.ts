import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientService } from '../../assets/prisma/prisma-client-module/prisma-client.service';


import { DetailEntity } from './detail.entity';
import { Detail } from '../../types';


const DEFAULT_SORTING_TYPE = 'createAt';
// const DEFAULT_SORTING_DIRECTION = SortDirection.Desc;

@Injectable()
export class DetailRepository {
  constructor(
    private readonly client: PrismaClientService
    ) {}

  private async create(entityPlainData: Detail): Promise<DetailEntity> {
    return new DetailEntity(entityPlainData);
  }

  private async getDetailsCount(where: Prisma.DetailsWhereInput): Promise<number> {
    return this.client.details.count({ where });
  }

  private calculateDetailsOnPage(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
  }

  public async getAllCats(): Promise<DetailEntity[]> {
    const details = await this.client.details.findMany({});
    if (details.length < 1) { throw new NotFoundException('Details not found, ups'); }
    const entityDetails = details.map((detail) => this.create(detail));
    return Promise.all(entityDetails);
  }
}
