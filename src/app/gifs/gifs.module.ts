import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { GifCardListComponent } from './components/gif-card-list/gif-card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    CardComponent,
    GifCardListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
