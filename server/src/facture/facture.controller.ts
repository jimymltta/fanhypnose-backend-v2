import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FactureService } from "./facture.service";
import { FactureControllerBase } from "./base/facture.controller.base";

@swagger.ApiTags("factures")
@common.Controller("factures")
export class FactureController extends FactureControllerBase {
  constructor(
    protected readonly service: FactureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
