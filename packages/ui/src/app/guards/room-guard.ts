import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Promise<boolean> | boolean {
    const user = localStorage.getItem('loe:user');

    if (user) {
      return true;
    } else {
      // go to welcome page
      this.router.navigate(['']);
      return false;
    }
  }
}
