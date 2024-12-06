import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configModule } from "./modules/config.module";
import { LoggerMiddleware } from "../common/middlewares/logger.middleware";
import { CommonModule } from "../common/common.module";
import { UserModule } from "../user/user.module";
import { AuthModule } from "../auth/auth.module";
import { AnswersModule } from "../answers/answers.module";
import { ReportsModule } from "src/reports/reports.module";

@Module({
  imports: [
    AuthModule,
    configModule,
    CommonModule,
    AnswersModule,
    UserModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
