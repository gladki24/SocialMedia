import {isDefined} from "../../../../shared/utils";

export class LoginResponse {
    public token: string;

    public constructor(res?: LoginResponse) {
        if (isDefined(res)) {
            this.token = res.token;
        }
    }
}
