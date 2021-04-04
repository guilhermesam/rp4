import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './homePage/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './homePage/slider/slider.component';
import { MostViewedComponent } from './homePage/most-viewed/most-viewed.component';
import { AuctionsHomePageComponent } from './homePage/auctions-home-page/auctions-home-page.component';

import { SearchAuctionsComponent } from './auctions/searchAuctions/search-auctions.component';
import { AuctionComponent } from './auctions/auction/auction/auction.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdmFooterComponent } from './administration/adm-footer/adm-footer.component';
import { AdmHeaderComponent } from './administration/adm-header/adm-header.component';
import { AdmMainComponent } from './administration/adm-main/adm-main.component';
import { AdmParticipantsComponent } from './administration/adm-participants/adm-participants.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SliderComponent,
    MostViewedComponent,
    AuctionsHomePageComponent,
    AuctionsHomePageComponent,
    SearchAuctionsComponent,
    AuctionComponent,
   AuctionComponent,
   AdministrationComponent,
   AdmFooterComponent,
   AdmHeaderComponent,
   AdmMainComponent,
   AdmParticipantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
