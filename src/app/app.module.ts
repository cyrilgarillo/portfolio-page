import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'; // Importieren

// Standalone-Komponenten importieren
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
    ContactFormComponent, // Nur AppComponent bleibt in declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule, // HttpClientModule hinzufügen
    HomeComponent, // Standalone-Komponenten in imports
    AboutComponent,
    PagesComponent,
    CryptoDisplayComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
