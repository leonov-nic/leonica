import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientService } from '../../assets/prisma/prisma-client-module/prisma-client.service';

import { CatEntity } from './cat.entity';
import { Cat } from '../../types';
import { CreateCatDto } from './dto/create-cat.dto';

const DEFAULT_SORTING_TYPE = 'createAt';
// const DEFAULT_SORTING_DIRECTION = SortDirection.Desc;

@Injectable()
export class CatRepository {
  constructor(
    private readonly client: PrismaClientService
    ) {}

  private async create(entityPlainData: Cat): Promise<CatEntity> {
    return new CatEntity(entityPlainData);
  }

  private async getCatsCount(where: Prisma.CatWhereInput): Promise<number> {
    return this.client.cat.count({ where });
  }

  private calculateCatsOnPage(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
  }

  public async createCat(dto: CreateCatDto): Promise<CatEntity> {
    

    const record = await this.client.cat.create({
      data: {
        ...dto,
        likesCount: 0,
        likes: {
          connect: [],
        },
      },
    });
    return await this.create(record);
  }

  public async getAllCats(): Promise<CatEntity[]> {
    const cats = await this.client.cat.findMany({

      include: {
        likes: true,
      },
    });

    const entityCats = cats.map((cat) => this.create(cat));
    return  Promise.all(entityCats);
  }
}
