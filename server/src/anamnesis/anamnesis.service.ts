import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AnamnesisServiceBase } from "./base/anamnesis.service.base";

@Injectable()
export class AnamnesisService extends AnamnesisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
