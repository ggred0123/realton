"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const answers_dto_1 = require("./dto/answers.dto");
const answers_repository_1 = require("./answers.repository");
const event_detail_dto_1 = require("./dto/event-detail.dto");
let EventService = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async createEvent(payload, user) {
        const [category, cities] = await Promise.all([
            this.eventRepository.findCategoryById(payload.categoryId),
            this.eventRepository.findCitiesByIds(payload.cityIds),
        ]);
        if (!category) {
            throw new common_1.NotFoundException("카테고리를 찾을 수 없습니다.");
        }
        if (cities.length !== payload.cityIds.length) {
            throw new common_1.NotFoundException("도시를 찾을 수 없습니다.");
        }
        if (payload.startTime >= payload.endTime) {
            throw new common_1.BadRequestException("시작 시간은 종료 시간보다 빨라야 합니다 ");
        }
        if (payload.startTime < new Date()) {
            throw new common_1.BadRequestException("모임 시작 시간은 현재 시간 이후여야 합니다.");
        }
        const data = {
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
        return answers_dto_1.EventDto.from(event);
    }
    async getEvents(query) {
        const events = await this.eventRepository.getEvents(query);
        return answers_dto_1.EventListDto.from(events);
    }
    async getMyEvents(user) {
        const events = await this.eventRepository.getEventsJoinedBy(user.id);
        return answers_dto_1.EventListDto.from(events);
    }
    async getEventById(eventId) {
        const event = await this.eventRepository.findEventDetailById(eventId);
        if (!event) {
            throw new common_1.NotFoundException("모임을 찾을 수 없습니다.");
        }
        return event_detail_dto_1.EventDetailDto.from(event);
    }
    async putUpdateEvent(eventId, payload, user) {
        const event = await this.eventRepository.findEventById(eventId);
        if (!event) {
            throw new common_1.NotFoundException("모임을 찾을 수 없습니다.");
        }
        if (event.hostId !== user.id) {
            throw new common_1.ForbiddenException("모임 주최자만 수정할 수 있습니다");
        }
        if (payload.startTime >= payload.endTime) {
            throw new common_1.BadRequestException("시작 시간은 종료 시간보다 빨라야 합니다.");
        }
        if (payload.startTime < new Date()) {
            throw new common_1.BadRequestException("모임 시작 시간은 현재 시간 이후여야 합니다.");
        }
        const [category, cities] = await Promise.all([
            this.eventRepository.findCategoryById(payload.categoryId),
            this.eventRepository.findCitiesByIds(payload.cityIds),
        ]);
        if (!category) {
            throw new common_1.NotFoundException("카테고리를 찾을 수 없습니다.");
        }
        if (cities.length !== payload.cityIds.length) {
            throw new common_1.NotFoundException("도시를 찾을 수 없습니다.");
        }
        const data = {
            title: payload.title,
            description: payload.description,
            categoryId: payload.categoryId,
            cityIds: payload.cityIds,
            startTime: payload.startTime,
            endTime: payload.endTime,
            maxPeople: payload.maxPeople,
        };
        const updatedEvent = await this.eventRepository.updateEvent(eventId, data);
        return answers_dto_1.EventDto.from(updatedEvent);
    }
    async patchUpdateEvent(eventId, payload, user) {
        const data = this.validateNullOf(payload);
        const event = await this.eventRepository.findEventById(eventId);
        if (!event) {
            throw new common_1.NotFoundException("모임을 찾을 수 없습니다.");
        }
        if (event.hostId !== user.id) {
            throw new common_1.ForbiddenException("모임 주최자만 수정할 수 있습니다");
        }
        const startTime = payload.startTime ?? event.startTime;
        const endTime = payload.endTime ?? event.endTime;
        if (startTime >= endTime) {
            throw new common_1.BadRequestException("시작 시간은 종료 시간보다 빨라야 합니다.");
        }
        if (startTime < new Date()) {
            throw new common_1.BadRequestException("모임 시작 시간은 현재 시간 이후여야 합니다.");
        }
        if (payload.categoryId) {
            const category = await this.eventRepository.findCategoryById(payload.categoryId);
            if (!category) {
                throw new common_1.NotFoundException("카테고리를 찾을 수 없습니다.");
            }
        }
        if (payload.cityIds) {
            const cities = await this.eventRepository.findCitiesByIds(payload.cityIds);
            if (cities.length !== payload.cityIds.length) {
                throw new common_1.NotFoundException("도시를 찾을 수 없습니다.");
            }
        }
        if (payload.maxPeople) {
            const participantsIds = await this.eventRepository.getParticipantsIds(eventId);
            if (participantsIds.length > payload.maxPeople) {
                throw new common_1.ConflictException("현재 참가 인원보다 적은 수로 변경할 수 없습니다.");
            }
        }
        const updatedEvent = await this.eventRepository.updateEvent(eventId, data);
        return answers_dto_1.EventDto.from(updatedEvent);
    }
    async deleteEvent(eventId, user) {
        const event = await this.eventRepository.findEventById(eventId);
        if (!event) {
            throw new common_1.NotFoundException("모임을 찾을 수 없습니다.");
        }
        if (event.hostId !== user.id) {
            throw new common_1.ForbiddenException("모임 주최자만 삭제할 수 있습니다.");
        }
        await this.eventRepository.deleteEvent(eventId);
    }
    async joinEvent(eventId, user) {
        const event = await this.eventRepository.findEventById(eventId);
        if (!event) {
            throw new common_1.NotFoundException("모임을 찾을 수 없습니다.");
        }
        if (event.startTime < new Date()) {
            throw new common_1.ConflictException("이미 시작된 모임에 참여할 수 없습니다.");
        }
        const participantsIds = await this.eventRepository.getParticipantsIds(eventId);
        if (participantsIds.includes(user.id)) {
            throw new common_1.ConflictException("이미 참여한 모임입니다.");
        }
        if (participantsIds.length >= event.maxPeople) {
            throw new common_1.ConflictException("인원이 가득 찼습니다.");
        }
        await this.eventRepository.joinEvent(eventId, user.id);
    }
    async leaveEvent(eventId, user) {
        const event = await this.eventRepository.findEventById(eventId);
        if (!event) {
            throw new common_1.NotFoundException("모임을 찾을 수 없습니다.");
        }
        if (event.hostId === user.id) {
            throw new common_1.ConflictException("모임 주최자는 모임에서 나갈 수 없습니다.");
        }
        if (event.startTime < new Date()) {
            throw new common_1.ConflictException("이미 시작된 모임에서 나갈 수 없습니다.");
        }
        const participantsIds = await this.eventRepository.getParticipantsIds(eventId);
        if (!participantsIds.includes(user.id)) {
            throw new common_1.ConflictException("참여하지 않은 모임입니다.");
        }
        await this.eventRepository.leaveEvent(eventId, user.id);
    }
    validateNullOf(payload) {
        if (payload.title === null) {
            throw new common_1.BadRequestException("title은 null이 될 수 없습니다.");
        }
        if (payload.description === null) {
            throw new common_1.BadRequestException("description은 null이 될 수 없습니다.");
        }
        if (payload.categoryId === null) {
            throw new common_1.BadRequestException("categoryId는 null이 될 수 없습니다.");
        }
        if (payload.cityIds === null) {
            throw new common_1.BadRequestException("cityIds는 null이 될 수 없습니다.");
        }
        if (payload.startTime === null) {
            throw new common_1.BadRequestException("startTime은 null이 될 수 없습���다.");
        }
        if (payload.endTime === null) {
            throw new common_1.BadRequestException("endTime은 null이 될 수 없습니다.");
        }
        if (payload.maxPeople === null) {
            throw new common_1.BadRequestException("maxPeople은 null이 될 수 없습니다.");
        }
        return {
            title: payload.title,
            description: payload.description,
            categoryId: payload.categoryId,
            cityIds: payload.cityIds,
            startTime: payload.startTime,
            endTime: payload.endTime,
            maxPeople: payload.maxPeople,
        };
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answers_repository_1.EventRepository])
], EventService);
//# sourceMappingURL=answers.service.js.map