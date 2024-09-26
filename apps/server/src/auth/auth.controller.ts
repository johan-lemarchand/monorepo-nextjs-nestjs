import { Controller, Post, UseGuards, Req, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Get('oauth')
  @UseGuards(AuthGuard('oauth2'))
  oauth() {}

  @Get('oauth/callback')
  @UseGuards(AuthGuard('oauth2'))
  oauthCallback(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Post('magic-link')
  async sendMagicLink(@Body('email') email: string) {
    return this.authService.sendMagicLink(email);
  }

  @Get('magic-link/callback')
  @UseGuards(AuthGuard('magic-link'))
  magicLinkCallback(@Req() req: Request) {
    return this.authService.login(req.user);
  }
}
