import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  articles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTechnologyNews();
  }

  fetchTechnologyNews() {
    const apiUrl = 'https://hn.algolia.com/api/v1/search?query=technology';
    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        this.articles = response.hits;
      },
      error: (error) => {
        console.error('Fehler beim Abrufen der Nachrichten:', error);
      }
    });
  }
}
