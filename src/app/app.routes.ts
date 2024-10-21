import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainsiteComponent } from './mainsite/mainsite.component';

export const routes: Routes = [
    { path: '', component: MainsiteComponent },
    { path: 'imprint', component: ImprintComponent },];
