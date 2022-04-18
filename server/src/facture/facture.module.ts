import { Module } from "@nestjs/common";
import { FactureModuleBase } from "./base/facture.module.base";
import { FactureService } from "./facture.service";
import { FactureController } from "./facture.controller";
import { FactureResolver } from "./facture.resolver";

@Module({
  imports: [FactureModuleBase],
  controllers: [FactureController],
  providers: [FactureService, FactureResolver],
  exports: [FactureService],
})
export class FactureModule {}
