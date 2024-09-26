import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import * as dotenv from 'dotenv';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  getDatabaseUrl(siteName: string): string {
    const siteEnvPath = path.resolve(__dirname, `../../../${siteName}/.env`);
    const siteEnv = dotenv.config({ path: siteEnvPath }).parsed;

    return <string>(
      (siteEnv?.DATABASE_URL ||
        this.configService.get<string>('DEFAULT_DATABASE_URL'))
    );
  }
}
