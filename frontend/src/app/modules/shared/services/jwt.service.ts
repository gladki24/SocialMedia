import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {isNullOrEmpty} from "../utils";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  public constructor(
      private readonly localStorageService: LocalStorageService
  ) {
  }

  public hasToken(): boolean {
    return !isNullOrEmpty(this.getToken());
  }

  public setToken(jwt: string): void {
    this.localStorageService.set('token', jwt);
  }

  public getToken(): string {
    return this.localStorageService.get('token');
  }
}
