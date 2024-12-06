import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("Realton")
export class AppController {
  constructor(private readonly appService: AppService) {}
}
