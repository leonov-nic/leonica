import { UseGuards, Controller, Body, Post, Get, Param, Patch, Delete, Query, HttpStatus } from '@nestjs/common';
import { CatRepository } from './cat.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { fillDto } from '../../helpers/common';
import { CatRdo } from './rdo/cat.rdo';
import { JwtAuthGuard } from 'src/libs';


@Controller('cats')
export class CatController {
  constructor(
    private readonly catRepos: CatRepository,
    // private readonly notifyService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  public async save(@Body() dto: CreateCatDto) {
    const cat = await this.catRepos.createCat(dto);
    return fillDto(CatRdo, cat.toPOJO());
  }

  @Get('')
  public async getAllCats() {
    const cats = await this.catRepos.getAllCats();
    return fillDto(CatRdo, cats);
  }

}
