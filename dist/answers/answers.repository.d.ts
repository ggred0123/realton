import { PrismaService } from "../common/services/prisma.service";
import { CreateEventData } from "./type/create-answer-data.type";
import { Category, City } from "@prisma/client";
import { EventDetailData } from "./type/event-detail-data.type";
import { EventQuery } from "./query/event.query";
import { EventData } from "./type/answer-data.type";
import { UpdateEventData } from "./type/update-event-data.type";
export declare class EventRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createEvent(data: CreateEventData): Promise<EventData>;
    updateEvent(id: number, data: UpdateEventData): Promise<EventData>;
    deleteEvent(id: number): Promise<void>;
    findCategoryById(id: number): Promise<Category | null>;
    findCitiesByIds(ids: number[]): Promise<City[]>;
    findEventById(id: number): Promise<EventData | null>;
    getEvents(query: EventQuery): Promise<EventData[]>;
    getEventsJoinedBy(userId: number): Promise<EventData[]>;
    getParticipantsIds(eventId: number): Promise<number[]>;
    joinEvent(eventId: number, userId: number): Promise<void>;
    leaveEvent(eventId: number, userId: number): Promise<void>;
    findEventDetailById(id: number): Promise<EventDetailData | null>;
}
