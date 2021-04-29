import { Routes } from '@angular/router'

import { HomeComponent } from './homePage/home/home.component'
import { SearchAuctionsComponent } from './auctions/searchAuctions/search-auctions.component'
import { AuctionComponent } from './auctions/auction/auction/auction.component'
import { LoginComponent } from './login/login.component'
import { AdministrationComponent } from './administration/administration.component'
import { AdmParticipantsComponent } from './administration/adm-participants/adm-participants.component'
import { AdmAuctionComponent } from './administration/AdmAuctions/adm-auction/adm-auction.component'
import { CharityAuctionComponent } from './auctions/charity-auction/charity-auction.component'

export const ROUTES:  Routes = [
    {path : '', component: LoginComponent},
    {path : 'buscar-leiloes', component: SearchAuctionsComponent},
    {path : 'leilao', component: AuctionComponent},
    {path : 'leilao/:id', component: AuctionComponent},
    {path : 'homePage', component: HomeComponent },
    {path : 'administration', component: AdministrationComponent},
    {path : 'participants-manager', component: AdmParticipantsComponent},
    {path : 'login', component: LoginComponent},
    {path : 'adicionar-leilao', component: AdmAuctionComponent },
    {path : 'leilao-beneficente', component: CharityAuctionComponent }


]
