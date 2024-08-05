import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar...</h5>
  <input type="text"
  class="bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4l flex-auto w-full"
  placeholder="Search your gif here"
  (keyup.enter) = "searchTag()"
  #txtTagInput

  /> `,
})

export class SearchBoxComponent  {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(
    private giftService: GifsService
  ) { }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.giftService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
