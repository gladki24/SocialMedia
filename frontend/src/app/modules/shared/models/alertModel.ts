import {AlertType} from "../enums/alert-type.enum";

export class AlertModel {
    public constructor(
        public readonly header: string,
        public readonly body: string,
        public readonly type: AlertType
    ) {
    }
}
