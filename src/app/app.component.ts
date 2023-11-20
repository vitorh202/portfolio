import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('pt');
  }

  public switchlanguage(language: string){
    this.translate.use(language);
  }

  ngOnInit(): void {
    Aos.init();

  }

}
