import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // Переопределяем метод handleRequest
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    // Если есть ошибка или пользователь не найден — выбрасываем исключение
    if (err || !user) {
      // Можно использовать info для более детального сообщения
      throw err || new UnauthorizedException(info?.message || 'Unauthorized');
    }
    // Иначе возвращаем пользователя (аутентификация успешна)
    return user;
  }
}