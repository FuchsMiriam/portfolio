import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-mainsite',
  standalone: true,
  imports: [CommonModule, AboutmeComponent, AboveTheFoldComponent, CommentsComponent, ContactComponent, HeaderComponent, PortfolioComponent, SkillsComponent],
  templateUrl: './mainsite.component.html',
  styleUrl: './mainsite.component.scss'
})
export class MainsiteComponent {

}
