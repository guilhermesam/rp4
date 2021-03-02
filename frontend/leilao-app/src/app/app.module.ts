import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HomeComponent } from './homePage/home/home.component';
import { FooterComponent } from './homePage/footer/footer.component';
import { SliderComponent } from './homePage/slider/slider.component';
import { MostViewedComponent } from './homePage/most-viewed/most-viewed.component';
import { AuctionsHomePageComponent } from './homePage/auctions-home-page/auctions-home-page.component';
>>>>>>> 1996a38c2c7fafcc69c0e6947441fe0d1c0b0569

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
    AuctionsHomePageComponent
>>>>>>> 1996a38c2c7fafcc69c0e6947441fe0d1c0b0569
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
