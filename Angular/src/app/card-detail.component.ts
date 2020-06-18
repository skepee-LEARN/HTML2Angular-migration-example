import { Component, OnInit, Input } from '@angular/core';
import { ICard } from './card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
@Input() card:ICard;

title:string;
isCollapsedInfo:boolean;
statistics:string[];
info:string[];
services:string[];

  constructor() { }

  ngOnInit(): void {
    this.title=this.card.destination.title;
    this.isCollapsedInfo = false;
    this.statistics=this.card.statistics;
    this.info=this.card.info;
    this.services=this.card.services;

  }

}
