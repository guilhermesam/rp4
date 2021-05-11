import { Component, OnInit } from '@angular/core';
import { LoginServiceAuctioneer } from 'src/app/services/loginAuctioneer.service';

import { Auctioneer } from 'src/shared/auctioneer';

@Component({
  selector: 'app-adm-header',
  templateUrl: './adm-header.component.html',
  styleUrls: ['./adm-header.component.css']
})
export class AdmHeaderComponent implements OnInit {

  constructor(private loginService:LoginServiceAuctioneer) { }

  public user: Auctioneer

  ngOnInit(): void {
    this.user = this.loginService.getStoredAuctioneer()
    console.log(localStorage.getItem('idAuctioneer'))
  }

  logout(){
    this.loginService.logout()
  }
}
