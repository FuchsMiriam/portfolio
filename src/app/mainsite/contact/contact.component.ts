import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private translateService: TranslateService,
    private router: Router
  ) {}

  privacyPolicyAccepted: boolean = false;
  checkboxImage: string = './assets/img/check_button.svg';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  emailSent = false;
  formSent = false;

  post = {
    endPoint: 'https://www.miriam-fuchs.net/assets/includes/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.privacyPolicyAccepted &&
      !this.mailTest
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showConfirmation(ngForm);
          },
          error: (error) => {
            console.error('Error occurred while sending email:', error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.showConfirmation(ngForm);
    }
  }

  private showConfirmation(ngForm?: NgForm) {
    if (ngForm) ngForm.resetForm();

    this.contactData.name = '';
    this.contactData.email = '';
    this.contactData.message = '';

    this.privacyPolicyAccepted = false;
    this.checkboxImage = './assets/img/check_button.svg';
    this.emailSent = true;
    this.formSent = true;

    setTimeout(() => {
      this.emailSent = false;
      this.formSent = false;
    }, 5000);
  }

  acceptPrivacyPolicy() {
    if (this.isFormValid()) {
      this.privacyPolicyAccepted = !this.privacyPolicyAccepted;
      this.checkboxImage = this.privacyPolicyAccepted
        ? './assets/img/check_button_checked.svg'
        : './assets/img/check_button.svg';
    }
  }

  isFormValid(): boolean {
    return (
      this.contactData.name.trim() !== '' &&
      this.contactData.email.trim() !== '' &&
      this.contactData.message.trim() !== ''
    );
  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  navigateToPrivacyPolicy(event: Event) {
    event.preventDefault();
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  getHtml(key: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.translateService.instant(key)
    );
  }
}
