import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactConfigService } from '../config/contact.config';

@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly contactConfigService: ContactConfigService
  ) {}

  @Post()
  async submitContactForm(
    @Body()
    contactData: {
      name: string;
      email: string;
      phone: string;
      message: string;
    },
  ) {
    const siteInfo = this.contactConfigService.siteConfig;
    await this.contactService.sendContactEmail(contactData, siteInfo);
    return { success: true, message: 'Message envoyé avec succès' };
  }
}
