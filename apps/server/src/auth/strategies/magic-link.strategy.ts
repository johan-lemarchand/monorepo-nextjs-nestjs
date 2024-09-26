import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AuthService } from '../auth.service';

@Injectable()
export class MagicLinkStrategy extends PassportStrategy(
  Strategy,
  'magic-link',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: any) {
    const token = req.query.token;
    return this.authService.validateMagicLink(token);
  }
}
