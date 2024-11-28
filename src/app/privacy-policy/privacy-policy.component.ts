import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  isLoaded = false;

  constructor(private translate: TranslateService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.get('PRIVACY_POLICY.TITLE').subscribe(() => {
      this.isLoaded = true;
    });
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
}
private scrollToSection(fragment: string): void {
  const element = document.getElementById(fragment);
  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
}
