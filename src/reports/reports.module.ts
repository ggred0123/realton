import { Module } from '@nestjs/common';
import { EventService } from './reports.service';
import { EventController } from './reports.controller';
import { EventRepository } from './reports.repository';

@Module({
  controllers: [EventController],
  providers: [EventService, EventRepository],
})
export class EventModule {}
