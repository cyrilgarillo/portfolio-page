import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // RouterModule importieren

@Component({
  selector: 'app-crypto-display',
  standalone: true, // Definiert die Komponente als standalone
  imports: [RouterModule],
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
