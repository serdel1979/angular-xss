import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-vulnerable',
  templateUrl: './no-vulnerable.component.html',
  styleUrls: ['./no-vulnerable.component.css']
})

export class NoVulnerableComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("Hola, soy un script")</script> <b>Syntax</b>';
}

