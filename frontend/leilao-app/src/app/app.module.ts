import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
=======
import { HeaderComponent } from './homePage/header/header.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
>>>>>>> Stashed changes
import { HomeComponent } from './homePage/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './homePage/slider/slider.component';
import { MostViewedComponent } from './homePage/most-viewed/most-viewed.component';
import { AuctionsHomePageComponent } from './homePage/auctions-home-page/auctions-home-page.component';
<<<<<<< Updated upstream
>>>>>>> 1996a38c2c7fafcc69c0e6947441fe0d1c0b0569
=======
import { AuctionCardMostViwedComponent } from './homePage/auction-card-most-viwed/auction-card-most-viwed.component';
import { SearchAuctionsComponent } from './auctions/searchAuctions/search-auctions.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
<<<<<<< HEAD
    LoginComponent,
    CardComponent
=======
    SliderComponent,
    MostViewedComponent,
<<<<<<< Updated upstream
    AuctionsHomePageComponent
>>>>>>> 1996a38c2c7fafcc69c0e6947441fe0d1c0b0569
=======
    AuctionsHomePageComponent,
    AuctionCardMostViwedComponent,
    SearchAuctionsComponent,
>>>>>>> Stashed changes
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
