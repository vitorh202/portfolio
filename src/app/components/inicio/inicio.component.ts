import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  ngOnInit(): void {
    Aos.init();
  }

}
