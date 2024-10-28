import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  privacyPolicyAccepted: boolean = false;
  checkboxImage: string = './assets/img/check_button.svg';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post completed'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  acceptPrivacyPolicy() {
    this.privacyPolicyAccepted = !this.privacyPolicyAccepted;
    this.checkboxImage = this.privacyPolicyAccepted
      ? './assets/img/check_button_checked.svg'
      : './assets/img/check_button.svg';
  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
