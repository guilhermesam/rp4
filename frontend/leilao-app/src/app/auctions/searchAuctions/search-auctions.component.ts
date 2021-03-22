import { Component, OnInit } from '@angular/core';
import { AuctionsService } from 'src/app/auction.services';
import { Category } from 'src/shared/categories.model';
import { Items } from 'src/shared/items.model';

@Component({
  selector: 'app-search-auctions',
  templateUrl: './search-auctions.component.html',
  styleUrls: ['./search-auctions.component.css'],
  providers: [ AuctionsService ]
})
export class SearchAuctionsComponent implements OnInit {

  public items : Items[]
  public categories : Category[]
  constructor(private aucticonsServices: AuctionsService) { }

  ngOnInit(): void {
    this.aucticonsServices.getAuctions()
      .then((items : Items[])=>{
        this.items = items
      })
      .catch((param : any) =>{
        console.log(param)
      })
    this.aucticonsServices.getCategories()
      .then((categories : Category[])=>{
        this.categories = categories
      })
      .catch((param : any) =>{
        console.log(param)
      })
      
  }

  

}
