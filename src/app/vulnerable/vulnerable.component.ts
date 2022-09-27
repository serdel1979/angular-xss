import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vulnerable',
  templateUrl: './vulnerable.component.html',
  styleUrls: ['./vulnerable.component.css']
})

export class VulnerableComponent {
  urlPeligrosa: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.urlPeligrosa = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.urlPeligrosa);
    this.updateVideoUrl('PUBnlbjZFAI');
  }

  updateVideoUrl(id: string) {

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
}