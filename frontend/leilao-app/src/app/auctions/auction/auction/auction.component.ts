import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AuctionsService } from 'src/app/auction.services';
import { Items } from 'src/shared/items.model';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
  providers: [ AuctionsService ]
})
export class AuctionComponent implements OnInit {

  
  public item: Items

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionsService
    ){ }

  ngOnInit(): void {
    this.auctionService.getAuctionsByID(this.route.snapshot.params['id'])
      .then(( item: Items ) =>{
        this.item = item
      } )
  }

}
