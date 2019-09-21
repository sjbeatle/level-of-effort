import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  user = this.userService.name || 'unknown';

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

}
