import { Component, OnInit, Input } from '@angular/core';
import {ICard, IDestination} from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input()
card:ICard;

title:string;
description:string;
imageUrl:string;
isCollapsedBook:boolean;
isCollapsedInfo:boolean;

ngOnInit(): void {
  this.isCollapsedBook = true;
  this.isCollapsedInfo = true;
  this.title=this.card.destination.title;
  this.description=this.card.destination.description;
  this.imageUrl=this.card.destination.imageUrl; 
}

}
