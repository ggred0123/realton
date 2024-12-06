import { EventService } from "./answers.service";
import { EventDto, EventListDto } from "./dto/answers.dto";
import { CreateEventPayload } from "./payload/create-event.payload";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { EventQuery } from "./query/event.query";
import { EventDetailDto } from "./dto/event-detail.dto";
import { PutUpdateEventPayload } from "./payload/put-update-event.payload";
import { PatchUpdateEventPayload } from "./payload/patch-update-event.payload";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    createEvent(payload: CreateEventPayload, user: UserBaseInfo): Promise<EventDto>;
    getEvents(query: EventQuery): Promise<EventListDto>;
    getEventById(eventId: number): Promise<EventDetailDto>;
    getMyEvents(user: UserBaseInfo): Promise<EventListDto>;
    putUpdateEvent(eventId: number, payload: PutUpdateEventPayload, user: UserBaseInfo): Promise<EventDto>;
    patchUpdateEvent(eventId: number, payload: PatchUpdateEventPayload, user: UserBaseInfo): Promise<EventDto>;
    deleteEvent(eventId: number, user: UserBaseInfo): Promise<void>;
    joinEvent(eventId: number, user: UserBaseInfo): Promise<void>;
    leaveEvent(eventId: number, user: UserBaseInfo): Promise<void>;
}
