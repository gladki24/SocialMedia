import {UserRole} from "../../../../shared/enums/role.enum";
import {isDefined} from "../../../../shared/utils";

export class Account {
    public id: number;
    public role: UserRole;
    public username: string;

    public constructor(res?: Account) {
        if (isDefined(res)) {
            this.id = res.id;
            this.role = res.role;
            this.username = res.username;
        }
    }
}
