import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.css']
})
export class CardServicesComponent implements OnInit {
  @Input() services:string[];
  @Input() destinationName:string;

  
  constructor() { }

  ngOnInit(): void {
  }

}
