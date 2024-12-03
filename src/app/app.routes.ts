import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainsiteComponent } from './mainsite/mainsite.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainsiteComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];


