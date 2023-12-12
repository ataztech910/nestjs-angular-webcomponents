import { Controller, Get, Post, Render, Res  } from '@nestjs/common';
import { Response } from 'express';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private statisticService: StatisticsService) {}

  @Get()
  @Render('statistics')
  getPage() {
    return { botList: this.statisticService.getBotList() };
  }

  @Get('add')
  @Render('add-bot')
  showBot() {
    return {};
  }
  
  @Post('add')
  addBot(@Res() res: Response) {
    return res.render('statistics', { botList: this.statisticService.getBotListUpdated() })
  }

  @Post('add-with-error')
  addWithErrorBot(@Res() res: Response) {
    res.header("HX-Retarget", "#serious-errors"); 
    res.header("HX-Reswap", "innerHTML");
    res.header("HX-Error", "No data");
    return res.json( { seriousErrors: 'Error message' });
    
  }
}
