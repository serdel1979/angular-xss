import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <h1>Security</h1>
  <app-no-vulnerable></app-no-vulnerable>
  <app-vulnerable></app-vulnerable>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-xss';


  


}
