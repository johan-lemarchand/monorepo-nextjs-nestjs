import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ResendConfigService {
  constructor(private configService: ConfigService) {}

  createResendConfig() {
    const apiKey = this.configService.get<string>('RESEND_API_KEY');
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not defined in the environment');
    }
    return {
      apiKey,
    };
  }
}
