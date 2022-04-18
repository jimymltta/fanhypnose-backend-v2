import { Module } from "@nestjs/common";
import { ScriptModuleBase } from "./base/script.module.base";
import { ScriptService } from "./script.service";
import { ScriptController } from "./script.controller";
import { ScriptResolver } from "./script.resolver";

@Module({
  imports: [ScriptModuleBase],
  controllers: [ScriptController],
  providers: [ScriptService, ScriptResolver],
  exports: [ScriptService],
})
export class ScriptModule {}
