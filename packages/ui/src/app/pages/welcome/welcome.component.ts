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
    const key = 'room';
    const room = this.route.snapshot.queryParams[key];
    this.userService.setName(this.name);
    this.router.navigate([room || randomId()]);
  }

  ngOnInit() { }
}
