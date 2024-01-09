import { Controller, Get, Inject, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('LX')
  private readonly test: string[];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(@Query('a') a: string): string[] {
    console.log(a);
    return this.test;
  }

  @Get('redirect')
  @Redirect('https:/juejin.cn') // 重定向
  redirect() {}
}
