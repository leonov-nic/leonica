import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {

  @Get('res')
  public async healthCheck() {
    try {
      // проверка состояния сервера

      // import { Injectable, HttpService, InternalServerErrorException } from '@nestjs/common';
      // import { catchError, map } from 'rxjs/operators';
      // import { of } from 'rxjs';
      // @Injectable()
      // export class ExternalApiService {
      //   private readonly apiUrl = 'https://домен/health/res'; 
      //   constructor(private readonly httpService: HttpService) {}
      //   async checkStatus(): Promise<boolean> {
      //     try {
      //       const response = await this.httpService.get(this.apiUrl).pipe(
      //         map(response => response.status === 200),
      //         catchError(error => {
      //           // Обработка ошибок, если API недоступен
      //           console.error('Error checking external API:', error.message);
      //           return of(false); // Возвращаем false в случае ошибки
      //         }),
      //       ).toPromise();
      
      //       return response;
      //     } catch (error) {
      //       throw new InternalServerErrorException('Failed to check external API status');
      //     }
      //   }
      // }

      return { status: 'OK' };
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
