import { Module } from "@nestjs/common";
import { AnamnesisModuleBase } from "./base/anamnesis.module.base";
import { AnamnesisService } from "./anamnesis.service";
import { AnamnesisController } from "./anamnesis.controller";
import { AnamnesisResolver } from "./anamnesis.resolver";

@Module({
  imports: [AnamnesisModuleBase],
  controllers: [AnamnesisController],
  providers: [AnamnesisService, AnamnesisResolver],
  exports: [AnamnesisService],
})
export class AnamnesisModule {}
