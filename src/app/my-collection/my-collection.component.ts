import { Component, OnInit, inject } from '@angular/core';
import { PokemonCard } from '../models/cardInterface';
import { CardService } from '../services/card-service.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatBottomSheet} from '@angular/material/bottom-sheet';
import { CollectionCardDetailsComponent } from '../collection-card-details/collection-card-details.component';

@Component({
  selector: 'app-my-collection',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatCardModule,],
  templateUrl: './my-collection.component.html',
  styleUrl: './my-collection.component.scss'
})
export class MyCollectionComponent implements OnInit {
  cards: PokemonCard[] = [];
  collectionService = inject(CardService)
  _bottomSheet = inject(MatBottomSheet)

  constructor() { }

  ngOnInit(): void {
    this.loadCollection();
  }

  loadCollection(): void {
    this.collectionService.getMyCollection().subscribe(
      cards => {
        this.cards = cards;
      },
      error => {
        console.error('Error fetching collection:', error);
      }
    );
  }

  openBottomSheet(card: PokemonCard): void {
    const bottomSheetRef = this._bottomSheet.open(CollectionCardDetailsComponent, { data: { card } });

    bottomSheetRef.afterDismissed().subscribe(() => {
      console.log('Bottom sheet dismissed');
    });
  }

  

}
