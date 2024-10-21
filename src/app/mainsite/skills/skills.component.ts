import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  hover: boolean = false;
}
