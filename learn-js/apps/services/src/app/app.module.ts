import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticsModule } from '../statistics/statistics.module';
import { WebComponentModule } from '../web-component/web-component.module';
import { ShopModule } from '../shop/shop.module';

@Module({
  imports: [StatisticsModule, WebComponentModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
