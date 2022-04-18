import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnamnesisService } from "./anamnesis.service";
import { AnamnesisControllerBase } from "./base/anamnesis.controller.base";

@swagger.ApiTags("anamneses")
@common.Controller("anamneses")
export class AnamnesisController extends AnamnesisControllerBase {
  constructor(
    protected readonly service: AnamnesisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
