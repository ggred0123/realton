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
exports.EventRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/services/prisma.service");
let EventRepository = class EventRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createEvent(data) {
        return this.prisma.event.create({
            data: {
                hostId: data.hostId,
                title: data.title,
                description: data.description,
                categoryId: data.categoryId,
                startTime: data.startTime,
                endTime: data.endTime,
                maxPeople: data.maxPeople,
                eventCity: {
                    createMany: {
                        data: data.cityIds.map((cityId) => ({
                            cityId,
                        })),
                    },
                },
            },
            select: {
                id: true,
                hostId: true,
                title: true,
                description: true,
                categoryId: true,
                eventCity: {
                    select: {
                        cityId: true,
                    },
                },
                startTime: true,
                endTime: true,
                maxPeople: true,
            },
        });
    }
    async updateEvent(id, data) {
        return this.prisma.event.update({
            where: {
                id,
            },
            data: {
                title: data.title,
                description: data.description,
                categoryId: data.categoryId,
                eventCity: data.cityIds
                    ? {
                        deleteMany: {},
                        createMany: {
                            data: data.cityIds.map((cityId) => ({
                                cityId,
                            })),
                        },
                    }
                    : undefined,
                startTime: data.startTime,
                endTime: data.endTime,
                maxPeople: data.maxPeople,
            },
            select: {
                id: true,
                hostId: true,
                title: true,
                description: true,
                categoryId: true,
                eventCity: {
                    select: {
                        cityId: true,
                    },
                },
                startTime: true,
                endTime: true,
                maxPeople: true,
            },
        });
    }
    async deleteEvent(id) {
        await this.prisma.$transaction([
            this.prisma.eventJoin.deleteMany({
                where: {
                    eventId: id,
                },
            }),
            this.prisma.eventCity.deleteMany({
                where: {
                    eventId: id,
                },
            }),
            this.prisma.event.delete({
                where: {
                    id,
                },
            }),
        ]);
    }
    async findCategoryById(id) {
        return this.prisma.category.findUnique({
            where: {
                id,
            },
        });
    }
    async findCitiesByIds(ids) {
        return this.prisma.city.findMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
    async findEventById(id) {
        return this.prisma.event.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                hostId: true,
                title: true,
                description: true,
                categoryId: true,
                eventCity: {
                    select: {
                        cityId: true,
                    },
                },
                startTime: true,
                endTime: true,
                maxPeople: true,
            },
        });
    }
    async getEvents(query) {
        return this.prisma.event.findMany({
            where: {
                categoryId: query.categoryId,
                eventCity: {
                    some: {
                        cityId: query.cityId,
                    },
                },
                host: {
                    id: query.hostId,
                    deletedAt: null,
                },
            },
            select: {
                id: true,
                hostId: true,
                title: true,
                description: true,
                categoryId: true,
                eventCity: {
                    select: {
                        cityId: true,
                    },
                },
                startTime: true,
                endTime: true,
                maxPeople: true,
            },
        });
    }
    async getEventsJoinedBy(userId) {
        return this.prisma.event.findMany({
            where: {
                eventJoin: {
                    some: {
                        userId,
                    },
                },
            },
            select: {
                id: true,
                hostId: true,
                title: true,
                description: true,
                categoryId: true,
                eventCity: {
                    select: {
                        cityId: true,
                    },
                },
                startTime: true,
                endTime: true,
                maxPeople: true,
            },
        });
    }
    async getParticipantsIds(eventId) {
        const data = await this.prisma.eventJoin.findMany({
            where: {
                eventId,
                user: {
                    deletedAt: null,
                },
            },
            select: {
                userId: true,
            },
        });
        return data.map((d) => d.userId);
    }
    async joinEvent(eventId, userId) {
        await this.prisma.eventJoin.create({
            data: {
                eventId,
                userId,
            },
        });
    }
    async leaveEvent(eventId, userId) {
        await this.prisma.eventJoin.delete({
            where: {
                eventId_userId: {
                    eventId,
                    userId,
                },
            },
        });
    }
    async findEventDetailById(id) {
        return this.prisma.event.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                hostId: true,
                title: true,
                description: true,
                categoryId: true,
                eventCity: {
                    select: {
                        cityId: true,
                    },
                },
                startTime: true,
                endTime: true,
                maxPeople: true,
                eventJoin: {
                    where: {
                        user: {
                            deletedAt: null,
                        },
                    },
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                review: {
                    select: {
                        id: true,
                        userId: true,
                        eventId: true,
                        score: true,
                        title: true,
                        description: true,
                    },
                },
            },
        });
    }
};
exports.EventRepository = EventRepository;
exports.EventRepository = EventRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventRepository);
//# sourceMappingURL=answers.repository.js.map