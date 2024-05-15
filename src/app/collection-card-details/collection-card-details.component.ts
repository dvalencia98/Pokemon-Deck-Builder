import { Component, Inject, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { PokemonCard } from '../models/cardInterface';
import { MatCardModule } from '@angular/material/card';
import { CardService } from '../services/card-service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-collection-card-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './collection-card-details.component.html',
  styleUrl: './collection-card-details.component.scss'
})
export class CollectionCardDetailsComponent {
  cards: PokemonCard[] = [];
  card: PokemonCard;
  collectionService = inject(CardService)
  _bottomSheet = inject(MatBottomSheet)

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  private _bottomSheetRef: MatBottomSheetRef<CollectionCardDetailsComponent>) {
    this.card = data.card;
  }

  dismiss(): void {
    this._bottomSheetRef.dismiss();
  }
  closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }

  deleteCard(cardId: string): void {
    this._bottomSheet.dismiss();
    this.collectionService.deleteCard(cardId).subscribe(
      () => {
        console.log('Card deleted successfully.');
        // Reload the collection after deletion
      },
      error => {
        console.error('Error deleting card:', error);
      }
    );
    window.location.reload()
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


}
