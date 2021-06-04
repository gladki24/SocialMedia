import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  public constructor(
      private readonly router: Router
  ) { }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public main(): void {
    this.router.navigate(['/']);
  }

  public profile(): void {
    this.router.navigate(['/profile']);
  }

  public yoodle(link: string): void {
    this.router.navigate(['/yoodle', link])
  }
}
