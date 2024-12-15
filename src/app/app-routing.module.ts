import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagesComponent } from './pages/pages.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CryptoDisplayComponent } from './crypto-display/crypto-display.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'cryptoDisplay', component: CryptoDisplayComponent },
];
