import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
 /* comments = [
    { 
      message: 'When I worked with Miriam as a web developer, I was impressed by her determination and motivation. Through her valuable ideas and productive discussions, we were able to find the best way to implement our web application together. Thanks to her strong will and persistence, she was able to successfully overcome any challenge.',
      name: 'Ina Penner'
    },
    { 
      message: 'Working with Miriam was very pleasant from the start. She impresses with her professionalism, solution-oriented thinking and reliable way of working. With her open and friendly nature, she contributes significantly to positive team dynamics.',
      name: 'Manuel Mannhold'
    }
  ];*/

  comments = [
    { 
      message: 'comments.miriam_ina_message',
      name: 'Ina Penner'
    },
    { 
      message: 'comments.miriam_manuel_message',
      name: 'Manuel Mannhold'
    }
  ];

  // Index des aktuell angezeigten Kommentars
  currentCommentIndex = 0;

  translatedMessage: string = '';

  // Aktuelle Sprache
  currentLanguage: string = 'en';

  constructor(private translateService: TranslateService) {
    // Initiale Nachricht und Sprache setzen
    this.updateMessage();
    this.translateService.setDefaultLang(this.currentLanguage); // Standard auf Englisch setzen
  }

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
    };
    this.updateMessage();
  }

  // Funktion zum nächsten Kommentar wechseln
  nextComment() {
    if (this.currentCommentIndex < this.comments.length - 1) {
      this.currentCommentIndex++;
    } else {
      this.currentCommentIndex = 0;
    };
    this.updateMessage();
  }

  updateMessage() {
    const currentMessageKey = this.comments[this.currentCommentIndex].message;
    this.translateService.get(currentMessageKey).subscribe((translated: string) => {
      this.translatedMessage = translated;
    });
  }
}
