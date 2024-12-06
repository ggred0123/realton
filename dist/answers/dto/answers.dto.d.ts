import { EventData } from "../type/answer-data.type";
export declare class EventDto {
    id: number;
    hostId: number;
    title: string;
    description: string;
    categoryId: number;
    cityIds: number[];
    startTime: Date;
    endTime: Date;
    maxPeople: number;
    static from(data: EventData): EventDto;
    static fromArray(data: EventData[]): EventDto[];
}
export declare class EventListDto {
    events: EventDto[];
    static from(data: EventData[]): EventListDto;
}
