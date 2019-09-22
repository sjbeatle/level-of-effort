import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { randomId } from '../../shared/utils';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  name = '';

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  acceptName() {
    if (this.name) {
      this.userService.setName(this.name);
    }
    this.router.navigate([this.roomId || randomId()]);
  }

  onKey(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.acceptName();
    }
  }

  get roomId() {
    return history.state && history.state.room;
  }

  get buttonText() {
    return this.roomId ? 'Join the room!' : 'Create a room!';
  }

  ngOnInit() { }
}
