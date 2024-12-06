import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEventPayload } from './payload/create-event.payload';
import { UserBaseInfo } from '../auth/type/user-base-info.type';
import { EventDto, EventListDto } from './dto/reports.dto';
import { CreateEventData } from './type/create-event-data.type';
import { EventRepository } from './reports.repository';
import { EventQuery } from './query/event.query';
import { EventDetailDto } from './dto/reports-detail.dto';
import { PutUpdateEventPayload } from './payload/put-update-event.payload';
import { UpdateEventData } from './type/update-event-data.type';
import { PatchUpdateEventPayload } from './payload/patch-update-event.payload';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async createEvent(
    payload: CreateEventPayload,
    user: UserBaseInfo,
  ): Promise<EventDto> {
    const [category, cities] = await Promise.all([
      this.eventRepository.findCategoryById(payload.categoryId),
      this.eventRepository.findCitiesByIds(payload.cityIds),
    ]);

    if (!category) {
      throw new NotFoundException('카테고리를 찾을 수 없습니다.');
    }

    if (cities.length !== payload.cityIds.length) {
      throw new NotFoundException('도시를 찾을 수 없습니다.');
    }

    if (payload.startTime >= payload.endTime) {
      throw new BadRequestException('시작 시간은 종료 시간보다 빨라야 합니다 ');
    }

    if (payload.startTime < new Date()) {
      throw new BadRequestException(
        '모임 시작 시간은 현재 시간 이후여야 합니다.',
      );
    }

    const data: CreateEventData = {
      hostId: user.id,
      title: payload.title,
      description: payload.description,
      categoryId: payload.categoryId,
      cityIds: payload.cityIds,
      startTime: payload.startTime,
      endTime: payload.endTime,
      maxPeople: payload.maxPeople,
    };

    const event = await this.eventRepository.createEvent(data);

    return EventDto.from(event);
  }

  async getEvents(query: EventQuery): Promise<EventListDto> {
    const events = await this.eventRepository.getEvents(query);

    return EventListDto.from(events);
  }

  async getMyEvents(user: UserBaseInfo): Promise<EventListDto> {
    const events = await this.eventRepository.getEventsJoinedBy(user.id);

    return EventListDto.from(events);
  }

  async getEventById(eventId: number): Promise<EventDetailDto> {
    const event = await this.eventRepository.findEventDetailById(eventId);

    if (!event) {
      throw new NotFoundException('모임을 찾을 수 없습니다.');
    }

    return EventDetailDto.from(event);
  }

}
