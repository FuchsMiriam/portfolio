import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  changeArrowImage(isHover: boolean) {
    const scrollArrow = document.querySelector('.scroll-arrow') as HTMLImageElement;
    if (scrollArrow) {
      scrollArrow.src = isHover ? './assets/img/arrow_up_hover.svg' : './assets/img/arrow_up.svg';
    }
  }

  scrollToAboutMe(): void {
    const aboutMeElement = document.querySelector('#aboutme');
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
