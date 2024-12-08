import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crypto-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crypto-display.component.html',
  styleUrls: ['./crypto-display.component.css'],
})
export class CryptoDisplayComponent {
  cryptoName: string = ''; // Vom Benutzer eingegebene Kryptowährung
  cryptoData: any = null; // Daten der Kryptowährung

  constructor(private http: HttpClient) {}

  fetchCryptoData(): void {
    if (!this.cryptoName.trim()) {
      alert('Bitte geben Sie eine Kryptowährung ein!');
      return;
    }

    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = {
      vs_currency: 'usd',
      ids: this.cryptoName.trim().toLowerCase(), // Eingabe des Benutzers
    };

    this.http.get<any[]>(apiUrl, { params }).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.cryptoData = data[0]; // Die erste Kryptowährung
        } else {
          alert('Keine Daten für die eingegebene Kryptowährung gefunden.');
          this.cryptoData = null;
        }
      },
      error: (error) => {
        console.error('Fehler beim Abrufen der Kryptowährungsdaten:', error);
        alert('Fehler beim Abrufen der Daten. Bitte versuchen Sie es später erneut.');
      },
    });
  }
}
