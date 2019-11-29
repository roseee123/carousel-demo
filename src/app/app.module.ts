import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ShareModule } from './share/share.module';
import { CarouselComponent } from './carousel/carousel.component';
import { SummernoteComponent } from './summernote/summernote.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselComponent,
    SummernoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
