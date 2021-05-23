import {Component} from '@angular/core';
import {AlertModel} from "../../models/alert-model";
import {AlertService} from "../../services/alert.service";

@Component({
    selector: 'ms-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

    public get notifications(): AlertModel[] {
        return this._service.notifications;
    }

    public constructor(
        private readonly _service: AlertService
    ) {
    }

    public close(index: number): void {
        this.notifications.splice(index, 1);
    }
}
