import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ConsultantServiceBase } from "./base/consultant.service.base";

@Injectable()
export class ConsultantService extends ConsultantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
