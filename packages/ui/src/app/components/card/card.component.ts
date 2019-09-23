import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() estimate: number | string;
  @Input() active: boolean;
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

  // TODO: Find out why I need to disable the next line
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    this.didVote = this.active;
  }

}
