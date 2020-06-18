import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ICard } from './card';

@Injectable(
   {   providedIn: 'root'}
)
export class CardService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';
//  private cardUrl = '../api/cards/cards.json';
 private cardUrl = 'assets/cards/cards.json';

  constructor(private http: HttpClient) { }

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.cardUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCard(id: number): Observable<ICard | undefined> {
    return this.getCards()
      .pipe(
        map((cards: ICard[]) => cards.find(p => p.destination.cardId === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
