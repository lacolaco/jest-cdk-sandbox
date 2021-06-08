import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent, OverlayContentComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, OverlayContentComponent],
  imports: [BrowserModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
