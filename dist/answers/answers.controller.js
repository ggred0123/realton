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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const user_decorator_1 = require("../auth/decorator/user.decorator");
const answers_service_1 = require("./answers.service");
const create_answers_payload_1 = require("./payload/create-answers.payload");
const date_query_1 = require("./query/date.query");
let AnswersController = class AnswersController {
    constructor(answerService) {
        this.answerService = answerService;
    }
    async createAnswers(createAnswersPayload, user) {
        return this.answerService.createAnswers(createAnswersPayload, user);
    }
    async getAnswers(query, user) {
        return this.answerService.getAnswersByDate(query, user);
    }
};
exports.AnswersController = AnswersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_answers_payload_1.CreateAnswersPayload, Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "createAnswers", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [date_query_1.DateQuery, Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "getAnswers", null);
exports.AnswersController = AnswersController = __decorate([
    (0, common_1.Controller)("answers"),
    (0, swagger_1.ApiTags)("answers API"),
    __metadata("design:paramtypes", [answers_service_1.AnswersService])
], AnswersController);
//# sourceMappingURL=answers.controller.js.map