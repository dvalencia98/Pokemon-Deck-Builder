import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'cards',
        title: 'Card Database',
        component: CardHomeComponent,
      },
      {
        path: 'collection',
        title: 'Card Database',
        component: MyCollectionComponent,
      },
];