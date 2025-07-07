import { Inject, Injectable } from "@nestjs/common";
import notifyConfig, { NotifyConfig } from "../../libs/config/notify.config";
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotifyService {
  constructor(
    @Inject(notifyConfig.KEY)
    private readonly notifyConfig: NotifyConfig,
    private readonly mailerService: MailerService,
  ) {}

  async sendActivationUserByEmail(email: string, token: string | null) {
    const domen = this.notifyConfig.domen;
    if (!domen) { throw new Error('Domen key (notifyConfig env) is undefined'); }

    if (token) {
      const activationLink = `${domen}/api/auth/activate?token=${token}`;

      await this.mailerService.sendMail({
        to: email,
        subject: 'Активация аккаунта',
        template: './activation', // путь к шаблону письма
        context: {
          activationLink,
        },
      });
    }
  }
}
