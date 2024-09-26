import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  private _profile: any;
  private _email: string;
  private _token: string;
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateOAuthUser(profile: any) {
    this._profile = profile;
  }

  async sendMagicLink(email: string) {
    this._email = email;
  }

  async validateMagicLink(token: string) {
    this._token = token;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
