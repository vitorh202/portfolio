import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  ngOnInit(): void {
    Aos.init();
  }

  

}
