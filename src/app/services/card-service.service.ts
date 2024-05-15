import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonCard } from '../models/cardInterface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = 'http://localhost:3000/cards'; // Base URL for the API
  http: HttpClient = inject(HttpClient);

  constructor() { }


  //Method to save a card to the database
  saveCardToDatabase(card: PokemonCard): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/new`, card)
      .pipe(
        catchError(this.handleAddingError)
      );
  }

  // Error handling
  private handleAddingError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  // Method to fetch cards from the database
  getMyCollection(): Observable<PokemonCard[]> {
    return this.http.get<PokemonCard[]>(this.apiUrl)
  }

  // Method to delete a card from the database
  deleteCard(cardId: string): Observable<any> {
    const url = `${this.apiUrl}/${cardId}`;
    return this.http.delete<any>(url)
  }

}