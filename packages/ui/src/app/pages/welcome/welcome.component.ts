import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  acceptName() {
    this.userService.setName(this.name);
    this.router.navigate([this.roomId || randomId()]);
  }

  get roomId() {
    return this.route.snapshot.queryParams.room;
  }

  get buttonText() {
    return this.roomId ? 'Join the room!' : 'Create a room!';
  }

  ngOnInit() { }
}
