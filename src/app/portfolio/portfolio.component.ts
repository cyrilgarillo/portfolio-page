import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  articles: any[] = []; // Liste der Artikel

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTechnologyNews();
  }

  fetchTechnologyNews() {
    const apiUrl = 'https://hn.algolia.com/api/v1/search?query=technology';

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        this.articles = response.hits; // Treffer aus der API
      },
      error: (error) => {
        console.error('Fehler beim Abrufen der Nachrichten:', error);
      },
    });
  }
}
