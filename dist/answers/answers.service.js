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
exports.AnswersService = void 0;
const common_1 = require("@nestjs/common");
const answers_repository_1 = require("./answers.repository");
const answers_dto_1 = require("./dto/answers.dto");
let AnswersService = class AnswersService {
    constructor(answersRepository) {
        this.answersRepository = answersRepository;
    }
    async createAnswers(payload, user) {
        const createData = {
            userId: user.id,
            replies: payload.replies,
        };
        const answer = await this.answersRepository.createAnswer(createData);
        return answers_dto_1.AnswersDto.from(answer);
    }
    async getAnswersByDate(query, user) {
        return this.answersRepository.getAnswersByDate(query);
    }
};
exports.AnswersService = AnswersService;
exports.AnswersService = AnswersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answers_repository_1.AnswersRepository])
], AnswersService);
//# sourceMappingURL=answers.service.js.map