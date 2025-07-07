import { UseGuards, Controller, Body, Post, Get, Param, Patch, Delete, Query, HttpStatus } from '@nestjs/common';
import { DetailRepository } from './detail.repository';
import { fillDto } from '../../helpers/common';
import { DetailRdo } from './rdo/detail.rdo';
import { JwtAuthGuard } from 'src/libs';


@Controller('details')
export class DetailController {
  constructor(
    private readonly detailRepository: DetailRepository,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get('')
  public async getAllCats() {
    const cats = await this.detailRepository.getAllCats();
    return fillDto(DetailRdo, cats);
  }

}
