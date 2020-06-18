import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.css']
})
export class CardStatisticsComponent implements OnInit {

@Input() statistics:string[];
@Input() destinationName:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
