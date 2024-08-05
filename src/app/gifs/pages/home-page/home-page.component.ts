import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(
    private giftService: GifsService


  ){}

  get gifs(): Gif[]{
    return this.giftService.gifList;
  }

}
