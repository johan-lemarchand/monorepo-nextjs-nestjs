import {
  Controller,
  Post,
  UseGuards,
  Req,
  Get,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
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
  async sendMagicLink(
    @Body('email') email: string,
    @Body('siteInfo') siteInfo: {
      title: string;
      email: { from: string; contact: string };
      maker: string;
      appIcon: string;
      prodUrl: string;
      company: { name: string; address: string };
    },
  ) {
    return this.authService.sendMagicLink(email, siteInfo);
  }

  @Get('magic-link/callback')
  async magicLinkCallback(@Body('token') token: string) {
    const user = await this.authService.validateMagicLink(token);
    if (user) {
      return this.authService.login(user);
    }
    throw new UnauthorizedException('Lien magique invalide');
  }

  @Post('signout')
  async signout(@Req() req: Request) {
    return this.authService.signout(req);
  }

  @Get('status')
  @UseGuards(AuthGuard('jwt'))
  async checkAuthStatus(@Req() req: Request) {
    return { isAuthenticated: true, user: req.user };
  }

  @Get('providers')
  async getProviders() {
    return this.authService.getAvailableProviders();
  }
}
