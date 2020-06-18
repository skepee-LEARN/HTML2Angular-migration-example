# From HTML, JQuery, Bootstrap to Angular, TypeScript, Ngx-Bootstrap, Json


## Description 
This is an example of migration from one block single HTML page to Angular components. Data are supposed to be retrieved from json. Part of the migration is also to design the structure of json.

What we want to do is showed in this image:
![Objective](https://github.com/skepee/BYH-Angular/blob/master/description/Slide3.PNG)



## HTML page
Let us consider a simple HTML page to book holidays. An example of how it works can be found here:

[Dribbble](https://dribbble.com/shots/5043578-Book-your-holidays-with-parallax)

[Pinterest](https://www.pinterest.co.uk/pin/800655639979829791/)

Basically it is a simple page with three different destinations for holidays.
Moreover, show/hide panels are used to choose three different type of breakfast (one on them) and up to three different type of sightseeing.

Technically is formed by  a single html page and an external CSS file. That's it.


## Angular process migration

Let's start to migrate the booking holidays page in an Angular app.

# Migration process
The migration can be summarized in the following steps:

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

