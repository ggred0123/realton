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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const answers_service_1 = require("./answers.service");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const answers_dto_1 = require("./dto/answers.dto");
const create_event_payload_1 = require("./payload/create-event.payload");
const user_decorator_1 = require("../auth/decorator/user.decorator");
const event_query_1 = require("./query/event.query");
const event_detail_dto_1 = require("./dto/event-detail.dto");
const put_update_event_payload_1 = require("./payload/put-update-event.payload");
const patch_update_event_payload_1 = require("./payload/patch-update-event.payload");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async createEvent(payload, user) {
        return this.eventService.createEvent(payload, user);
    }
    async getEvents(query) {
        return this.eventService.getEvents(query);
    }
    async getEventById(eventId) {
        return this.eventService.getEventById(eventId);
    }
    async getMyEvents(user) {
        return this.eventService.getMyEvents(user);
    }
    async putUpdateEvent(eventId, payload, user) {
        return this.eventService.putUpdateEvent(eventId, payload, user);
    }
    async patchUpdateEvent(eventId, payload, user) {
        return this.eventService.patchUpdateEvent(eventId, payload, user);
    }
    async deleteEvent(eventId, user) {
        return this.eventService.deleteEvent(eventId, user);
    }
    async joinEvent(eventId, user) {
        return this.eventService.joinEvent(eventId, user);
    }
    async leaveEvent(eventId, user) {
        return this.eventService.leaveEvent(eventId, user);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "모임 생성" }),
    (0, swagger_1.ApiCreatedResponse)({ type: answers_dto_1.EventDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_payload_1.CreateEventPayload, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "createEvent", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "모임 전체 또는 필터 조회" }),
    (0, swagger_1.ApiOkResponse)({ type: answers_dto_1.EventListDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof event_query_1.EventQuery !== "undefined" && event_query_1.EventQuery) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getEvents", null);
__decorate([
    (0, common_1.Get)(":eventId"),
    (0, swagger_1.ApiOperation)({ summary: "모임 상세 조회" }),
    (0, swagger_1.ApiOkResponse)({ type: event_detail_dto_1.EventDetailDto }),
    __param(0, (0, common_1.Param)("eventId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getEventById", null);
__decorate([
    (0, common_1.Get)("me"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "내가 참여한 모임 조회" }),
    (0, swagger_1.ApiOkResponse)({ type: answers_dto_1.EventListDto }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getMyEvents", null);
__decorate([
    (0, common_1.Put)(":eventId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "모임 수정 (PUT)" }),
    (0, swagger_1.ApiOkResponse)({ type: answers_dto_1.EventDto }),
    __param(0, (0, common_1.Param)("eventId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, put_update_event_payload_1.PutUpdateEventPayload, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "putUpdateEvent", null);
__decorate([
    (0, common_1.Patch)(":eventId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "모임 수정 (PATCH)" }),
    (0, swagger_1.ApiOkResponse)({ type: answers_dto_1.EventDto }),
    __param(0, (0, common_1.Param)("eventId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, patch_update_event_payload_1.PatchUpdateEventPayload, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "patchUpdateEvent", null);
__decorate([
    (0, common_1.Delete)(":eventId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiNoContentResponse)(),
    __param(0, (0, common_1.Param)("eventId", common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "deleteEvent", null);
__decorate([
    (0, common_1.Post)(":eventId/join"),
    (0, common_1.HttpCode)(204),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "모임 참가" }),
    (0, swagger_1.ApiNoContentResponse)(),
    __param(0, (0, common_1.Param)("eventId", common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "joinEvent", null);
__decorate([
    (0, common_1.Post)(":eventId/leave"),
    (0, common_1.HttpCode)(204),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "모임 나가기" }),
    (0, swagger_1.ApiNoContentResponse)(),
    __param(0, (0, common_1.Param)("eventId", common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "leaveEvent", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)("events"),
    (0, swagger_1.ApiTags)("Event API"),
    __metadata("design:paramtypes", [answers_service_1.EventService])
], EventController);
//# sourceMappingURL=answers.controller.js.map