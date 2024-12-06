"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exception_filter_1 = require("./common/filter/exception.filter");
const cookieParser = require("cookie-parser");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        stopAtFirstError: true,
    }));
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "uploads"), {
        prefix: "/uploads/",
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Realton Server")
        .setDescription("Realton API description")
        .setVersion("1.0")
        .addTag("Realton")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("docs", app, document);
    const httpAdapter = app.getHttpAdapter().getInstance();
    httpAdapter.get("/", (req, res) => {
        res.redirect("/docs");
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map