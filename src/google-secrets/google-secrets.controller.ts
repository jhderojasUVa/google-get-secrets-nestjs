import { Controller, Get, Param } from '@nestjs/common';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

@Controller('google-secrets')
export class GoogleSecretsController {
  secretManagerServiceClient: SecretManagerServiceClient;
  constructor() {
    this.secretManagerServiceClient = new SecretManagerServiceClient();
  }
  @Get('/get/:project/:name')
  public async getSecret(@Param() params) {
    try {
      const [secret] = await this.secretManagerServiceClient.getSecret({
        name: `projects/${params.project}/secrets/${params.name}`,
      });
      return {
        success: true,
        secret,
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  }
}
