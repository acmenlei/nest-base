import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'LX', // 提供者
      useValue: ['test provide'],
    },
  ],
})
export class AppModule {}
