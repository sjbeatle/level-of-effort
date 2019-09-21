import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private nameSubject = new BehaviorSubject<string>('');
  name = this.nameSubject.asObservable();

  constructor() {
    this.name.subscribe(() => {

    });
  }

  setName(name: string) {
    this.nameSubject.next(name);
  }
}
