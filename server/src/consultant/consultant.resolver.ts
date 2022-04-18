import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ConsultantResolverBase } from "./base/consultant.resolver.base";
import { Consultant } from "./base/Consultant";
import { ConsultantService } from "./consultant.service";

@graphql.Resolver(() => Consultant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ConsultantResolver extends ConsultantResolverBase {
  constructor(
    protected readonly service: ConsultantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
