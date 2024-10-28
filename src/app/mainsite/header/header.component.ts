import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppComponent } from '../../app.component';
//import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /*constructor(private translate: TranslateService) {
    this.translate.setTranslation('en', {
      about: 'About Me',
      skills: 'Skills',
      portfolio: 'Portfolio'
    });

    this.translate.setTranslation('de', {
      about: 'Über Mich',
      skills: 'Fähigkeiten',
      portfolio: 'Portfolio'
    });

    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }*/
}
