import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleSecretsModule } from './google-secrets/google-secrets.module';

@Module({
  imports: [GoogleSecretsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
