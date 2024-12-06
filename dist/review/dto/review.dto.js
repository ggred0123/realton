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
exports.ReviewListDto = exports.ReviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReviewDto {
    static from(review) {
        return {
            id: review.id,
            eventId: review.eventId,
            userId: review.userId,
            score: review.score,
            title: review.title,
            description: review.description,
        };
    }
    static fromArray(reviews) {
        return reviews.map((review) => this.from(review));
    }
}
exports.ReviewDto = ReviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '리뷰 ID',
        type: Number,
    }),
    __metadata("design:type", Number)
], ReviewDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '모임 ID',
        type: Number,
    }),
    __metadata("design:type", Number)
], ReviewDto.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 ID',
        type: Number,
    }),
    __metadata("design:type", Number)
], ReviewDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '별점',
        type: Number,
    }),
    __metadata("design:type", Number)
], ReviewDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '리뷰 제목',
        type: String,
    }),
    __metadata("design:type", String)
], ReviewDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '리뷰 내용',
        type: String,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ReviewDto.prototype, "description", void 0);
class ReviewListDto {
    static from(reviews) {
        return {
            reviews: ReviewDto.fromArray(reviews),
        };
    }
}
exports.ReviewListDto = ReviewListDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '리뷰 목록',
        type: [ReviewDto],
    }),
    __metadata("design:type", Array)
], ReviewListDto.prototype, "reviews", void 0);
//# sourceMappingURL=review.dto.js.map