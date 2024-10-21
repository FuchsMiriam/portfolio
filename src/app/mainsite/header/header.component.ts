import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
