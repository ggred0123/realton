import { Module } from "@nestjs/common";
import { EventService } from "./answers.service";
import { EventController } from "./answers.controller";
import { EventRepository } from "./answers.repository";

@Module({
  controllers: [EventController],
  providers: [EventService, EventRepository],
})
export class EventModule {}
