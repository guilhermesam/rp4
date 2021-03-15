import { Component, OnInit } from '@angular/core';
import { AuctionsService } from 'src/app/auction.services';
import { Items } from 'src/shared/items.model';

@Component({
  selector: 'app-auctions-home-page',
  templateUrl: './auctions-home-page.component.html',
  styleUrls: ['./auctions-home-page.component.css'],
  providers: [ AuctionsService ]
})
export class AuctionsHomePageComponent implements OnInit {

  public items : Items[]

  constructor(private aucticonsServices: AuctionsService) { }

  ngOnInit(): void {
    this.aucticonsServices.getAuctions()
      .then((items : Items[])=>{
        this.items = items
      })
      .catch((param : any) =>{
        console.log(param)
      })

      
  }

}
