import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pages',
  standalone: true,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  public joke: string = '';
  public quote: string = '';
  public author: string = '';

  constructor(private http: HttpClient) {
    this.refreshDadJoke();
    this.refreshQuote();
  }

  // API-Aufruf für den Flachwitz
  public refreshDadJoke() {
    const headers = new HttpHeaders({ Accept: 'application/json' });
    this.http.get<any>('https://icanhazdadjoke.com/', { headers }).subscribe({
      next: (resp) => {
        this.joke = resp.joke;
      },
      error: (err) => {
        console.error('Fehler beim Abrufen des Witzes:', err);
        this.joke = 'Hier ist ein Standardwitz: Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann!';
      },
    });
  }

  // API-Aufruf für das Zitat
  public refreshQuote() {
    this.http.get<any>('https://api.zitatdestages.net').subscribe({
      next: (resp) => {
        this.quote = resp[0].q;
        this.author = resp[0].a;
      },
      error: (err) => {
        console.error('Fehler beim Abrufen des Zitats:', err);
        this.quote = 'Veränderungen beginnen bei dir selbst.';
        this.author = 'Unbekannt';
      },
    });
  }
}
