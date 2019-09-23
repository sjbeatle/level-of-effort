import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  estimates: Array<number | string> = [ 0, 1, 2, 3, 5, 8, 13, 21, 34, '?', 'Pass' ];
  vote: number | string = '';

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  onVoted(val: string | number) {
    this.vote = val === 'rescind' ? '' : val;
  }

  ngOnInit() {
  }

}
