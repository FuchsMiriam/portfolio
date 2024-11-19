import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  /*http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);
  translateService = inject(TranslateService);*/
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private translateService: TranslateService
  ) {}

  privacyPolicyAccepted: boolean = false;
  checkboxImage: string = './assets/img/check_button.svg';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;
  emailSent = false;
  formSent = false;

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
    if (ngForm.submitted && ngForm.form.valid && this.privacyPolicyAccepted && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            /*ngForm.resetForm();
            this.privacyPolicyAccepted = false;*/
            this.showConfirmation(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post completed'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      /*ngForm.resetForm();
      this.privacyPolicyAccepted = false;*/
      this.showConfirmation(ngForm);
    }
  }

  private showConfirmation(ngForm?: NgForm) {
    if (ngForm) ngForm.resetForm();
    this.privacyPolicyAccepted = false;
    this.emailSent = true;
    this.formSent = true;

    setTimeout(() => {
      this.emailSent = false;
      this.formSent = false;
    }, 5000);
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

  getHtml(key: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(this.translateService.instant(key));
  }

 
  
}
