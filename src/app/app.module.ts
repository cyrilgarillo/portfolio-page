import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagesComponent } from './pages/pages.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CryptoDisplayComponent } from './crypto-display/crypto-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent, 
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeComponent,  // Standalone-Komponente hinzufügen
    AboutComponent, // Standalone-Komponente hinzufügen
    PagesComponent,
    CryptoDisplayComponent  // Standalone-Komponente hinzufügen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
