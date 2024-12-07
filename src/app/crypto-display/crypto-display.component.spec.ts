import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto-display',
  templateUrl: './crypto-display.component.html',
  styleUrls: ['./crypto-display.component.css']
})
export class CryptoDisplayComponent implements OnInit {
  public solanaData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('CryptoDisplayComponent initialized!');
    this.getSolanaData();
  }

  getSolanaData() {
    this.http.get('https://api.coincap.io/v2/assets/solana').subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.solanaData = response.data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
