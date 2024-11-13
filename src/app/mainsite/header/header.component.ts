import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppComponent } from '../../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, TranslateModule],
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

  burgermenuOpen = false;

  toggleMenu() {
    this.burgermenuOpen = !this.burgermenuOpen;

    if (this.burgermenuOpen) {
      document.documentElement.style.overflow = 'hidden';  
    } else {
      document.documentElement.style.overflow = 'auto';  
    }
  }
  
}
