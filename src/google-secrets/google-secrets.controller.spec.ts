import { Test, TestingModule } from '@nestjs/testing';
import { GoogleSecretsController } from './google-secrets.controller';

describe('GoogleSecretsController', () => {
  let controller: GoogleSecretsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleSecretsController],
    }).compile();

    controller = module.get<GoogleSecretsController>(GoogleSecretsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
