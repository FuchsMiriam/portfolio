import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  comments = [
    { 
      message: 'When I worked with Miriam as a web developer, I was impressed by her determination and motivation. Through her valuable ideas and productive discussions, we were able to find the best way to implement our web application together. Thanks to her strong will and persistence, she was able to successfully overcome any challenge.',
      name: 'Ina Penner'
    },
    { 
      message: 'Working with Miriam was very pleasant from the start. She impresses with her professionalism, solution-oriented thinking and reliable way of working. With her open and friendly nature, she contributes significantly to positive team dynamics.',
      name: 'Manuel Mannhold'
    }
  ];

  // Index des aktuell angezeigten Kommentars
  currentCommentIndex = 0;

  getInitials(name: string): string {
    const names = name.split(' ');
    const initials = names.map(n => n.charAt(0).toUpperCase()).join('');
    return initials;
  }

  // Funktion zum vorherigen Kommentar wechseln
  prevComment() {
    if (this.currentCommentIndex > 0) {
      this.currentCommentIndex--;
    } else {
      this.currentCommentIndex = this.comments.length - 1;
    }
  }

  // Funktion zum nächsten Kommentar wechseln
  nextComment() {
    if (this.currentCommentIndex < this.comments.length - 1) {
      this.currentCommentIndex++;
    } else {
      this.currentCommentIndex = 0;
    }
  }
}
