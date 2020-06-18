import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-roundtrip',
  templateUrl: './card-roundtrip.component.html',
  styleUrls: ['./card-roundtrip.component.css']
})
export class CardRoundtripComponent implements OnInit {
  @Input() imageRoudtrip:string;

  constructor() { }

  ngOnInit(): void {
  }

}
