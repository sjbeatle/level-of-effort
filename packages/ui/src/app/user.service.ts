import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { storedObject } from './shared/utils';
import { IUser } from './shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private nameSubject = new BehaviorSubject<string>('');
  // private urlSubject = new BehaviorSubject<string>('');
  // private avatarSubject = new BehaviorSubject<string>('');
  // private emailSubject = new BehaviorSubject<string>('');
  name = this.nameSubject.asObservable();
  // url = this.urlSubject.asObservable();
  // avatar = this.avatarSubject.asObservable();
  // email = this.emailSubject.asObservable();

  constructor() {
    const userStorageKey = 'loe:user';
    const storedUser = storedObject.get(userStorageKey);
    if (storedUser && storedUser.name) {
      this.nameSubject.next(storedUser.name);
    }

    this.name.subscribe((name) => {
      const user: IUser = {
        name,
      };
      storedObject.set(userStorageKey, user);
    });
  }

  setName(name: string) {
    this.nameSubject.next(name);
  }
}
