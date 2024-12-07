import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = { name: '', email: '', message: '' };

  onSubmit() {
    // Simulierte Aktion bei erfolgreichem Absenden
    alert('Nachricht gesendet! Ich werde mich bald bei Ihnen melden.');
    console.log(this.formData);

    // Reset des Formulars nach dem Absenden
    this.formData = { name: '', email: '', message: '' };
  }
}
