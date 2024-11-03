import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppComponent } from '../../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, AppComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  activeLang: string = 'en';

  switchLanguage(language: string) {
    this.activeLang = language; 
    this.translate.use(language);
  }

  
}
