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
exports.AnswersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/services/prisma.service");
let AnswersRepository = class AnswersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAnswer(data) {
        return await this.prisma.answers.create({
            data: {
                userId: data.userId,
                replies: data.replies,
            },
            select: {
                id: true,
                userId: true,
                replies: true,
                createdAt: true,
            },
        });
    }
    async getAnswersByDate(query) {
        return this.prisma.answers.findFirst({
            where: {
                createdAt: query.createdAt,
            },
        });
    }
};
exports.AnswersRepository = AnswersRepository;
exports.AnswersRepository = AnswersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnswersRepository);
//# sourceMappingURL=answers.repository.js.map