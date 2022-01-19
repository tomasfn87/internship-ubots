import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "<a href="http://localhost:3000/movies">List all movies</a>', () => {
      expect(appController.home()).toBe(
        '<a href="http://localhost:3000/movies">List all movies</a>'
      );
    });
  });
});
