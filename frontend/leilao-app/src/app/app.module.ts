import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';



import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './homePage/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './homePage/slider/slider.component';
import { MostViewedComponent } from './homePage/most-viewed/most-viewed.component';
import { AuctionsHomePageComponent } from './homePage/auctions-home-page/auctions-home-page.component';

//import { AuctionCardMostViwedComponent } from './homePage/auction-card-most-viwed/auction-card-most-viwed.component';
import { SearchAuctionsComponent } from './auctions/searchAuctions/search-auctions.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CardComponent,
    SliderComponent,
    MostViewedComponent,
    AuctionsHomePageComponent,
    AuctionsHomePageComponent,
   // AuctionCardMostViwedComponent,
    SearchAuctionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
