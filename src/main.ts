import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FormComponent } from './app/@lib/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class='app-container'>
    <app-form />
  </div>
  `,
  imports: [FormComponent]
})
export class App {
}

bootstrapApplication(App);
