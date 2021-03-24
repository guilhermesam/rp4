import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AuctionsService } from 'src/app/services/auction.services';
import { Items } from 'src/shared/items.model';
import { Bids } from 'src/shared/bids.model';
import { BidsService } from 'src/app/services/bids.service'

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
  providers: [ AuctionsService, BidsService ]
})
export class AuctionComponent implements OnInit {
  

  public item: Items

  /* Lance  */
  public bid: Bids = new Bids(null," "," ")

  /* Dados para realizar um lance */
  public valueBid: number 
  public participantId: string = "1a"

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionsService,
    private bidsService: BidsService
    ){ }

  ngOnInit(): void {
    this.auctionService.getAuctionsByID(this.route.snapshot.params['id'])
      .then(( item: Items ) =>{
        this.item = item
      } )
  }

  public updateValue(valueBid: number): void{
    this.valueBid = valueBid
  }

  public makeABid(): void{
    this.bid.itemId = this.item.id
    this.bid.participantId = this.participantId
    this.bid.value = this.valueBid
    this.bidsService.makeBid(this.bid)
    .subscribe()
  }

}
