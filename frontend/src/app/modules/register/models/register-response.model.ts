import { UserRole } from '../../shared/enums/role.enum';
import { isDefined } from '../../shared/utils';

export class RegisterResponseModel {
  public id: string;
  public username: string;
  public role: UserRole;

  public constructor(res?: RegisterResponseModel) {
    if (isDefined(res)) {
      this.id = res.id;
      this.username = res.username;
      this.role = res.role;
    }
  }

}