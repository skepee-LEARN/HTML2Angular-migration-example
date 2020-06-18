export interface IDestination{
  cardId:number;
  title: string;
  description: string;
  imageUrl: string;  
}

export interface ICard {
  destination: IDestination;
  statistics: string[];
  info:string[];
  services:string[];
  booking: IBooking;
}

export interface IBooking {
  roundTripImage: string;
  breakFast:IListItemsAndOneLogo;
  placesToVisit:IListItemsAndOneLogo;
}


export interface IListItemsAndOneLogo
{
  items:string[];
  imageUrl:string;
}
