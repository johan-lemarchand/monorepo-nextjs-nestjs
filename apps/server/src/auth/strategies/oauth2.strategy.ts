import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { AuthService } from '../auth.service';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy, 'oauth2') {
  constructor(private authService: AuthService) {
    super({
      authorizationURL: 'https://provider.com/oauth2/authorize',
      tokenURL: 'https://provider.com/oauth2/token',
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/oauth2/callback',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    return this.authService.validateOAuthUser(profile);
  }
}
