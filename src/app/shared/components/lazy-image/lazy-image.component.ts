import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    if(!this.url) throw new Error('LazyImageComponent: url is required');
    if(!this.alt) throw new Error('LazyImageComponent: alt is required');
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  onLoad(){
    this.hasLoaded = true;
  }
}
