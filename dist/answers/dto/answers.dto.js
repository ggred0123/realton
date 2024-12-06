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
exports.AnswersListDto = exports.AnswersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AnswersDto {
    static from(data) {
        return {
            id: data.id,
            userId: data.userId,
            replies: data.replies,
            createdAt: data.createdAt,
        };
    }
    static fromArray(answers) {
        return answers.map((answer) => this.from(answer));
    }
}
exports.AnswersDto = AnswersDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "응답 id",
        type: Number,
    }),
    __metadata("design:type", Number)
], AnswersDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "유저 id",
        type: Number,
    }),
    __metadata("design:type", Number)
], AnswersDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "유저 응답들",
        type: [String],
    }),
    __metadata("design:type", Array)
], AnswersDto.prototype, "replies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "생성일",
        type: Date,
    }),
    __metadata("design:type", Date)
], AnswersDto.prototype, "createdAt", void 0);
class AnswersListDto {
    static from(answers) {
        return {
            answers: AnswersDto.fromArray(answers),
        };
    }
}
exports.AnswersListDto = AnswersListDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "리뷰 목록",
        type: [AnswersDto],
    }),
    __metadata("design:type", Array)
], AnswersListDto.prototype, "answers", void 0);
//# sourceMappingURL=answers.dto.js.map