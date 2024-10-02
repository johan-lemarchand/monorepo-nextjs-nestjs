import { Injectable } from '@nestjs/common';
import { ResendService } from 'nestjs-resend';
import ContactMessageEmail from '@repo/email-templates/emails/ContactMessage.email';
import { renderAsync } from '@react-email/render';

interface SiteInfo {
  title: string;
  email: {
    from: string;
    contact: string;
  };
}

@Injectable()
export class ContactService {
  constructor(private readonly resendService: ResendService) {}

  async sendContactEmail(
    data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    },
    siteInfo: SiteInfo,
  ) {
    const { name, email, phone, message } = data;

    const emailHtml = await renderAsync(
      ContactMessageEmail({
        name,
        email,
        phone,
        message,
        siteName: siteInfo.title,
        siteConfig: {
          appIcon: '',
          company: { address: '', name: '' },
          prodUrl: '',
          title: '',
        },
      }),
    );

    await this.resendService.send({
      from: siteInfo.email.from,
      to: siteInfo.email.contact,
      subject: `Nouveau message de contact de ${name}`,
      html: emailHtml,
    });
  }
}
