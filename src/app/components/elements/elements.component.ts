import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})

export class ElementsComponent {

  @Output() public changelang = new EventEmitter<{lang:string}>();

  itsplay:boolean = false;

  Playmusic(): void {
    this.itsplay = !this.itsplay;
  }

  languept(): void{
    this.changelang.emit({lang:'pt'});
  }
  langueen(): void{
    this.changelang.emit({lang:'en'});
  }

}
