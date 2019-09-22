import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { storedObject } from '../shared/utils';
import { IUser } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class RoomGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): Promise<boolean> | boolean {
    const user: IUser | null = storedObject.get('loe:user');
    const room = next.params.room;

    if (user && user.name) {
      return true;
    } else {
      // go to welcome page and pass along the room
      this.router.navigate([''], { state: { room } });
      return false;
    }
  }
}
