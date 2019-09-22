import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): Promise<boolean> | boolean {
    const user = localStorage.getItem('loe:user');
    const room = next.params.room;

    if (user) {
      return true;
    } else {
      // go to welcome page and pass along the room
      this.router.navigate([''], { queryParams: { room } });
      return false;
    }
  }
}
