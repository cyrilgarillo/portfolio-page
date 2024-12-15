import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = { name: '', email: '', message: '' };

  onSubmit() {
    alert('Nachricht gesendet! Ich werde mich bald bei Ihnen melden.');
    console.log(this.formData);
    this.formData = { name: '', email: '', message: '' };
  }
}
