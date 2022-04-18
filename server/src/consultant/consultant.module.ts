import { Module } from "@nestjs/common";
import { ConsultantModuleBase } from "./base/consultant.module.base";
import { ConsultantService } from "./consultant.service";
import { ConsultantController } from "./consultant.controller";
import { ConsultantResolver } from "./consultant.resolver";

@Module({
  imports: [ConsultantModuleBase],
  controllers: [ConsultantController],
  providers: [ConsultantService, ConsultantResolver],
  exports: [ConsultantService],
})
export class ConsultantModule {}
