import { Component, Inject, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { PokemonCard } from '../models/cardInterface';
import { MatCardModule } from '@angular/material/card';
import { CardService } from '../services/card-service.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  imports: [MatCardModule],
  standalone: true,
})
export class CardDetailsComponent {

  card: PokemonCard;
  cardService = inject(CardService)

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  private _bottomSheetRef: MatBottomSheetRef<CardDetailsComponent>) {
    this.card = data.card;
  }

  dismiss(): void {
    this._bottomSheetRef.dismiss();
  }
  closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }

  saveCardToDatabase(): void {
    this.cardService.saveCardToDatabase(this.card).subscribe(
      () => {
        console.log('Card saved successfully.');
        this.closeBottomSheet();
      },
      error => {
        console.error('Error saving card:', error);
      }
    );
  }

}

