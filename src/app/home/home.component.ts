import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Für API-Aufrufe
import { RouterModule } from '@angular/router'; // RouterModule importieren

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  quote: string = 'Lade ein inspirierendes Zitat...';

  constructor(private http: HttpClient) {}

  // API-Aufruf, um ein Zitat zu holen
  fetchQuote() {
    this.http.get<any>('https://zenquotes.io/api/random').subscribe({
      next: (data) => {
        this.quote = data[0].q; // Zitat aus dem Array
      },
      error: (error) => {
        console.error('Fehler beim Abrufen der API:', error);
        this.quote = 'Standardzitat: Veränderungen beginnen bei dir selbst!';
      },
    });
  }
}
