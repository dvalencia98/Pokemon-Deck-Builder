import { Component, HostListener, OnInit, inject } from '@angular/core';
import { PokemonCard } from '../models/cardInterface';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatBottomSheet} from '@angular/material/bottom-sheet';
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatCardModule],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.scss'
})
export class CardHomeComponent implements OnInit {

  cardsList: PokemonCard[] = [];
  filteredCardsList: PokemonCard[] = [];
  loading = false;
  searchTerm: string = '';

  _bottomSheet = inject(MatBottomSheet);



  constructor() {  }

  ngOnInit(): void {
    this.loadAllCards();
  }

  async loadAllCards(): Promise<void> {
    try {
      this.loading = true;
      const allCards = await this.getAllCards();
      this.cardsList = allCards;
      this.filterCards();
    } catch (error) {
      console.error('Error loading cards:', error);
    } finally {
      this.loading = false;
    }
  }

  async getAllCards(): Promise<PokemonCard[]> {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards`, {
      headers: {
        "X-Api-Key": "73aa737e-5f82-4346-a9f6-fb2a8fa345e2"
      }
    });
    const data = await response.json();
    return data.data;
  }

  filterCards(): void {
    this.filteredCardsList = this.cardsList.filter(card =>
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openBottomSheet(card: PokemonCard): void {
    const bottomSheetRef = this._bottomSheet.open(CardDetailsComponent, { data: { card } });

    bottomSheetRef.afterDismissed().subscribe(() => {
      console.log('Bottom sheet dismissed');
    });
  }

}