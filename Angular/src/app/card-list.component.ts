import { Component, OnInit } from '@angular/core';
import {ICard} from './card';
import {CardService} from './card.service'


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: ICard[]=[];
  errorMessage:"";
  isCollapsedInfo:boolean;




  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.isCollapsedInfo = true;

    this.cardService.getCards().subscribe({
    next: cards=>{
    this.cards=cards;
    },
    error: err=>this.errorMessage=err
    });
    
    }
    
}
