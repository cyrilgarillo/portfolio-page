import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages', // Muss mit 'app-pages' übereinstimmen
  standalone: true,
  templateUrl: './pages.component.html',
  imports: [RouterModule],
  styleUrls: ['./pages.component.css']
})

export class PagesComponent { }
