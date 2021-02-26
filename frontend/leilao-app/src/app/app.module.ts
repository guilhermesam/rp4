import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homePage/header/header.component';
import { HomeComponent } from './homePage/home/home.component';
import { FooterComponent } from './homePage/footer/footer.component';
import { SliderComponent } from './homePage/slider/slider.component';
import { MostViewedComponent } from './homePage/most-viewed/most-viewed.component';
import { AuctionsHomePageComponent } from './homePage/auctions-home-page/auctions-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    MostViewedComponent,
    AuctionsHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
