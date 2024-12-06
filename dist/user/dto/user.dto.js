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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserDto {
    static from(data) {
        return {
            id: data.id,
            email: data.email,
            name: data.name,
            birthday: data.birthday,
            cityId: data.cityId,
            categoryId: data.categoryId,
        };
    }
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 ID',
        type: Number,
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이메일',
        type: String,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이름',
        type: String,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생일',
        type: Date,
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '도시 ID',
        type: Number,
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserDto.prototype, "cityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카테고리 ID',
        type: Number,
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "categoryId", void 0);
//# sourceMappingURL=user.dto.js.map