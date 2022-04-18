import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AnamnesisResolverBase } from "./base/anamnesis.resolver.base";
import { Anamnesis } from "./base/Anamnesis";
import { AnamnesisService } from "./anamnesis.service";

@graphql.Resolver(() => Anamnesis)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AnamnesisResolver extends AnamnesisResolverBase {
  constructor(
    protected readonly service: AnamnesisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
