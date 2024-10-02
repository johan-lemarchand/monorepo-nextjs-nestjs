import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { DatabaseConfigService } from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ResendModule } from 'nestjs-resend';
import { ResendConfigService } from './config/resend.config';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    ResendModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (resendConfigService: ResendConfigService) =>
        resendConfigService.createResendConfig(),
      inject: [ResendConfigService],
    }),
    AuthModule,
    PrismaModule,
    ContactModule,
  ],
  providers: [DatabaseConfigService, ResendConfigService],
  exports: [DatabaseConfigService],
})
export class AppModule {}
