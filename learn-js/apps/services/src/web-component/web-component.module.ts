import { Module } from '@nestjs/common';
import { WebComponentController } from './web-component.controller';

@Module({
    controllers: [WebComponentController]
})
export class WebComponentModule {}
