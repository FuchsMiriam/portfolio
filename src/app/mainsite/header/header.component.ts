import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppComponent } from '../../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      this.translate.setDefaultLang('en');
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
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
