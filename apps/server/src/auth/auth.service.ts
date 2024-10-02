import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { ResendService } from 'nestjs-resend';
import { renderAsync } from '@react-email/render';
import MagicLinkEmail from '@repo/email-templates/emails/MagicLinkEmail.email';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private resendService: ResendService,
  ) {}

  async validateOAuthUser(profile: any) {
    let user = await this.prisma.user.findUnique({
      where: { email: profile.email },
    });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: profile.email,
          name: profile.name,
        },
      });
    }
    return user;
  }

  async sendMagicLink(email: string, siteInfo: any) {
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 3600000);

    await this.prisma.magicLink.create({
      data: {
        email,
        token,
        expires,
      },
    });

    const magicLinkUrl = `${process.env.FRONTEND_URL}/auth/verify?token=${token}`;

    const emailHtml = await renderAsync(
      MagicLinkEmail({
        url: magicLinkUrl,
        makerName: siteInfo.maker,
        siteTitle: siteInfo.title,
        siteConfig: {
          title: siteInfo.title,
          appIcon: siteInfo.appIcon,
          prodUrl: siteInfo.prodUrl,
          company: siteInfo.company,
        },
      })
    );

    await this.resendService.send({
      from: siteInfo.email.from,
      to: email,
      subject: 'Votre lien de connexion magique',
      html: emailHtml,
    });

    console.log(`Lien magique envoyé à ${email}`);
  }

  async validateMagicLink(token: string) {
    const magicLink = await this.prisma.magicLink.findUnique({
      where: { token },
      include: { user: true },
    });
    if (!magicLink || magicLink.expires < new Date()) {
      throw new UnauthorizedException('Lien magique invalide ou expiré');
    }
    if (!magicLink.user) {
      magicLink.user = await this.prisma.user.create({
        data: { email: magicLink.email },
      });
    }
    await this.prisma.magicLink.delete({ where: { id: magicLink.id } });
    return magicLink.user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async signout(req: any) {
    if (req.session) {
      req.session.destroy();
    }
    return { message: 'Déconnexion réussie' };
  }

  async getAvailableProviders() {
    return {
      credentials: true,
      oauth2: true,
      magicLink: true,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
