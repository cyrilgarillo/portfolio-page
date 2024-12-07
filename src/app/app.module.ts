import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importiere FormsModule
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from "./pages/pages.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,  // Nur Nicht-Standalone-Komponenten hier auflisten
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Füge FormsModule hier hinzu
    AppRoutingModule,
    PagesComponent,
    AboutComponent,
    HomeComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
