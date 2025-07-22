import { Module } from '@nestjs/common';

import { MailerModule } from '@nestjs-modules/mailer';
import * as path from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { NotifyService } from './notify.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'atlas.multihost.cloud',
        // port: 587,
        port: 465,
        secure: true,
        auth: {
          user: 'aqq17953@atlas.multihost.cloud',
          pass: 'MrdaNEnXQ8J',
        },
      },
      defaults: {
        from: '"Cats Activation" <aqq17953@atlas.multihost.cloud>',
      },
      template: {
        dir: path.join(__dirname, 'assets/templates'),
        adapter: new HandlebarsAdapter(), // или другой шаблонизатор
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [],
  providers: [NotifyService],
  exports: [NotifyService],
})
export class NotifyModule {}
