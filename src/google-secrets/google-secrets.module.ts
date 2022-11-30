import { Module } from '@nestjs/common';
import { GoogleSecretsController } from './google-secrets.controller';

@Module({
  controllers: [GoogleSecretsController],
})
export class GoogleSecretsModule {}
