import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() estimate: number | string;
  @Output() voted = new EventEmitter<number | string>();
  didVote = false;

  constructor() { }

  cardClick() {
    if (this.didVote) {
      this.rescind();
    } else {
      this.vote();
    }
  }

  vote() {
    this.voted.emit(this.estimate);
    this.didVote = true;
  }

  rescind() {
    this.voted.emit('rescind');
    this.didVote = false;
  }

  ngOnInit() {
  }

}
