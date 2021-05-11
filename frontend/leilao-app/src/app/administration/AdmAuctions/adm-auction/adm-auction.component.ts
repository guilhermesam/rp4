import { Component, OnInit } from '@angular/core';
import { AuctionsService } from 'src/app/services/auction.services';
import { Category } from 'src/shared/categories.model';
import { Items } from 'src/shared/items.model';
import { ItemsService } from 'src/app/services/item.service'
import { CreateAuction } from 'src/shared/createAuction.model';


@Component({
  selector: 'app-adm-auction',
  templateUrl: './adm-auction.component.html',
  styleUrls: ['./adm-auction.component.css'],
  providers: [ AuctionsService,ItemsService  ]
})

export class AdmAuctionComponent implements OnInit {


  public items : Items[]
  public categories : Category[]
  public availablesItems : Items[]
  public auction: CreateAuction

  constructor(
    private aucticonsServices: AuctionsService,
    private itemService: ItemsService
    ) { }

  ngOnInit(): void {
    this.getItems()
  }


  public getItems(): void{
    this.aucticonsServices.getAuctions()
    .then((items : Items[])=>{
      this.items = items
    })
    .catch((param : any) =>{
      console.log(param)
    })
  }

  public initAuction(): void {
    this.itemService.getavailableItems()
      .then((availablesItems : Items[]) =>{
        this.availablesItems = availablesItems
        const id = localStorage.getItem('idAuctioneer')
        this.auction = new CreateAuction(id,[this.availablesItems[0].id])
        this.aucticonsServices.createAuction(this.auction)
        .subscribe()  
    } )
  }
  

}
