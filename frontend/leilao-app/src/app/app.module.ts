import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homePage/header/header.component';
import { HomeComponent } from './homePage/home/home.component';
import { FooterComponent } from './homePage/footer/footer.component';
import { SliderComponent } from './homePage/slider/slider.component';
import { MostViewedComponent } from './homePage/most-viewed/most-viewed.component';
import { AuctionsHomePageComponent } from './homePage/auctions-home-page/auctions-home-page.component';
import { AuctionCardComponent } from './homePage/auction-card/auction-card.component';
import { AuctionCardMostViwedComponent } from './homePage/auction-card-most-viwed/auction-card-most-viwed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    MostViewedComponent,
    AuctionsHomePageComponent,
    AuctionCardComponent,
    AuctionCardMostViwedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
