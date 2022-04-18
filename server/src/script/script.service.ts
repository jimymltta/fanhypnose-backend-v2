import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScriptServiceBase } from "./base/script.service.base";

@Injectable()
export class ScriptService extends ScriptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
