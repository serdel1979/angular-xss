import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VulnerableComponent } from './vulnerable/vulnerable.component';
import { NoVulnerableComponent } from './no-vulnerable/no-vulnerable.component';



@NgModule({
  declarations: [
    AppComponent,
    VulnerableComponent,
    NoVulnerableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
