// apps/server/src/contact/contact.module.ts
import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactConfigService } from '../config/contact.config';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactConfigService],
})
export class ContactModule {}
