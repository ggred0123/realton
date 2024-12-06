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
exports.EventListDto = exports.EventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class EventDto {
    static from(data) {
        return {
            id: data.id,
            hostId: data.hostId,
            title: data.title,
            description: data.description,
            categoryId: data.categoryId,
            cityIds: data.eventCity.map((city) => city.cityId),
            startTime: data.startTime,
            endTime: data.endTime,
            maxPeople: data.maxPeople,
        };
    }
    static fromArray(data) {
        return data.map((event) => EventDto.from(event));
    }
}
exports.EventDto = EventDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "모임 ID",
        type: Number,
    }),
    __metadata("design:type", Number)
], EventDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "호스트 ID",
        type: Number,
    }),
    __metadata("design:type", Number)
], EventDto.prototype, "hostId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "이름",
        type: String,
    }),
    __metadata("design:type", String)
], EventDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "설명",
        type: String,
    }),
    __metadata("design:type", String)
], EventDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "카테고리 ID",
        type: Number,
    }),
    __metadata("design:type", Number)
], EventDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "도시 IDs",
        type: [Number],
    }),
    __metadata("design:type", Array)
], EventDto.prototype, "cityIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "시작 시간",
        type: Date,
    }),
    __metadata("design:type", Date)
], EventDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "종료 시간",
        type: Date,
    }),
    __metadata("design:type", Date)
], EventDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "최대 인원",
        type: Number,
    }),
    __metadata("design:type", Number)
], EventDto.prototype, "maxPeople", void 0);
class EventListDto {
    static from(data) {
        return {
            events: EventDto.fromArray(data),
        };
    }
}
exports.EventListDto = EventListDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "모임 목록",
        type: [EventDto],
    }),
    __metadata("design:type", Array)
], EventListDto.prototype, "events", void 0);
//# sourceMappingURL=answers.dto.js.map