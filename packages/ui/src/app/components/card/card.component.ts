import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() estimate: number | string;

  constructor() { }

  cardClick() {
    alert(`You clicked, ${this.estimate}!`);
  }

  ngOnInit() {
  }

}
