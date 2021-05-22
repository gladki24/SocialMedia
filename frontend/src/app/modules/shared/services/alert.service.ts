import {Injectable, TemplateRef} from '@angular/core';
import {AlertModel} from "../models/alertModel";
import {AlertType} from "../enums/alert-type.enum";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public get notifications(): AlertModel[] {
    return this._notifications;
  }

  private readonly _notifications: AlertModel[] = [];

  public constructor() { }

  public notifyDefault(header: string, body: string): void {
    this._notify(header, body, AlertType.Default);
  }

  public notifyPrimary(header: string, body: string): void {
    this._notify(header, body, AlertType.Primary);
  }

  public notifySecondary(header: string, body: string): void {
    this._notify(header, body, AlertType.Secondary);
  }

  public notifyInfo(header: string, body: string): void {
    this._notify(header, body, AlertType.Info);
  }

  public notifySuccess(header: string, body: string): void {
    this._notify(header, body, AlertType.Success);
  }

  public notifyDanger(header: string, body: string): void {
    this._notify(header, body, AlertType.Danger);
  }

  private _notify(header: string, body: string, type: AlertType): void {
    const notification = new AlertModel(
        header, body, type
    )
    this._notifications.push(notification);
  }
}
