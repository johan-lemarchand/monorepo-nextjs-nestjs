import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  sessionSecret: process.env.SESSION_SECRET || 'fallback_secret',
}));
