# From HTML, JQuery, Bootstrap to Angular 9, TypeScript, Ngx-Bootstrap, Json
Migration from one block HTML code to Angular 9 components retrieving data from json.

Example of migration of an existing HTML page to Angular app. The HTML project is already existing here: https://github.com/skepee/book-your-holidays-2. It's a simple HTML page with CSS, Jquery and Boostrap. This is a demo how it works:

[Book Your Holidays demo](https://dribbble.com/shots/5043578-Book-your-holidays-with-parallax)

Our exercise is to migrate this simple page in an Angular 9 App.

Let's start!

## 1. Component design
The migration starts from a design of the new page. Let's identify which are our potential components of our angular app.

Angular components are in this way designed:

![Component design](https://github.com/skepee/BYH-Angular/blob/master/description/Slide1.PNG)

## 2. Json 
Data are supposed come from Json, not existing in the old HTML. This is the structure of our Json data: 

```json
[
  {
    "destination":{
      "cardId": number,
      "title": string,
      "description": string,
      "imageUrl": string
    },
    "statistics":string[],
    "info":string[],
    "services":string[],
    "booking":
    {
      "roundTripImage":string,
      "breakFast":
      {
        "items":string[],
        "imageUrl":string
      },     
      "placesToVisit":
      {
        "items":string[],
        "imageUrl":string
      }
    }
  }
  ]  
```


## 3. Angular Interface
Now it is possible to design our interfaces in this way:

```angular
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
```


## 4. the Angular component architecture:

![Component architecture](https://github.com/skepee/BYH-Angular/blob/master/description/Slide2.PNG)




# Conclusion:

With Angular it is possible to create a modular design of our app. Evenf is the example is very simple, we can create multiple connected components. In our case ten modules in total have been used.

