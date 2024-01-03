import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './gif-card-list.component.html',
})
export class GifCardListComponent {

  @Input()
  public gifs: Gif[] = [];
}
