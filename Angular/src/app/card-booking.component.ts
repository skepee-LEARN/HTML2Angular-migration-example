import { Component, OnInit, Input } from '@angular/core';
import { ICard } from './card';

@Component({
  selector: 'app-card-booking',
  templateUrl: './card-booking.component.html',
  styleUrls: ['./card-booking.component.css']
})
export class CardBookingComponent implements OnInit {
  @Input() card:ICard;
  title:string;
  isCollapsedBook:boolean;

  constructor() { }

  ngOnInit(): void {
    this.title=this.card.destination.title;
    this.isCollapsedBook = false;
  }

}
