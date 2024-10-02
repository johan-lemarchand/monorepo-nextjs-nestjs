import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SiteConfig } from './site-config.interface';

@Injectable()
export class ContactConfigService {
  constructor(private configService: ConfigService) {}

  get siteConfig(): SiteConfig {
    return {
      title: this.configService.get<string>('SITE_NAME') || 'Site par défaut',
      email: {
        from:
          this.configService.get<string>('EMAIL_FROM') || 'noreply@example.com',
        contact:
          this.configService.get<string>('EMAIL_CONTACT') ||
          'contact@example.com',
      },
    };
  }
}
