import { Test, TestingModule } from '@nestjs/testing';
import { CompanyroleController } from './companyrole.controller';

describe('CompanyroleController', () => {
  let controller: CompanyroleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyroleController],
    }).compile();

    controller = module.get<CompanyroleController>(CompanyroleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
