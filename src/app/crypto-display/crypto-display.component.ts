import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Falls HttpClient benötigt wird

@Component({
  selector: 'app-crypto-display',
  standalone: true, // Definiert die Komponente als standalone
  imports: [CommonModule, HttpClientModule], // Füge CommonModule hier hinzu
  templateUrl: './crypto-display.component.html',
  styleUrls: ['./crypto-display.component.css']
})
export class CryptoDisplayComponent {
  public solanaData: any = null;

  constructor() {}

  ngOnInit(): void {
    // Füge hier deine Logik hinzu
  }
}
