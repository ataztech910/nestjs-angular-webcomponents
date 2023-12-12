import { Controller, Get, Param, Render  } from '@nestjs/common';

@Controller('web-component')
export class WebComponentController {
  constructor() {}

  @Get(':id')
  @Render('web-component')
  getPage(@Param('id') id: number) {
    return { id };
  }
}
