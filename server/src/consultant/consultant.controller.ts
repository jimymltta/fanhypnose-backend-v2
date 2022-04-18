import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConsultantService } from "./consultant.service";
import { ConsultantControllerBase } from "./base/consultant.controller.base";

@swagger.ApiTags("consultants")
@common.Controller("consultants")
export class ConsultantController extends ConsultantControllerBase {
  constructor(
    protected readonly service: ConsultantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
