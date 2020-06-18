import {
    Component, OnInit, Input
}
from '@angular/core';
import {
    IListItemsAndOneLogo
}
from './card';

@Component({ selector: 'app-card-visiting', templateUrl: './card-visiting.component.html', styleUrls: ['./card-visiting.component.css'] }) export class CardVisitingComponent implements OnInit {
    @Input() visiting: IListItemsAndOneLogo;
    logo: string;

    constructor() {}

    ngOnInit():void {

        this.logo= this.visiting.imageUrl;
    }
}
