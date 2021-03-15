import { Routes } from '@angular/router'

import { HomeComponent } from './homePage/home/home.component';
import { SearchAuctionsComponent } from './auctions/searchAuctions/search-auctions.component';

export const ROUTES:  Routes = [
    {path : '', component: HomeComponent},
    {path : 'buscar-leiloes', component: SearchAuctionsComponent}
]