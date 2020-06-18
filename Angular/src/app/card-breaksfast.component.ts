import { Component, OnInit, Input } from '@angular/core';
import { IListItemsAndOneLogo } from './card';

@Component({
  selector: 'app-card-breaksfast',
  templateUrl: './card-breaksfast.component.html',
  styleUrls: ['./card-breaksfast.component.css']
})
export class CardBreaksfastComponent implements OnInit {
  @Input() breakfast:IListItemsAndOneLogo;
  logo:string;
  
  constructor() { }

  ngOnInit(): void {
    this.logo= this.breakfast.imageUrl;



  }

}
