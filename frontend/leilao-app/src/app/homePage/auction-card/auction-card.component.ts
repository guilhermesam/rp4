import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuctionsService } from '../../auction.services'
@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css'],
  providers: [ AuctionsService ]
  
})
export class AuctionCardComponent implements OnInit {

  constructor(private auctionsService : AuctionsService) { }

  ngOnInit(): void {
   // let auctions : AuctionsService = new AuctionsService()
  
   this.auctionsService.getAuctions()
        
  }

}
