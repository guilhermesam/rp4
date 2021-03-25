import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Category } from '../../shared/categories.model'
import { Items } from '../../shared/items.model'

@Injectable()
export class AuctionsService {
    constructor(private http : HttpClient) { }
    
    public items : Items[]
    public category: Category[]
    
    public getAuctions(): Promise<Items[]>{
        return this.http.get('http://localhost:3333/items/search/all')
            .toPromise()
            .then((response: Items[]) => response)
            
    }

    public getCategories(): Promise<Category[]>{
        return this.http.get('http://localhost:3333/items/search/allCategories')
            .toPromise()
            .then((response: Category[]) => response)
            
    }

    public getAuctionsByID(id: string): Promise<Items>{
        return this.http.get(`http://localhost:3333/items/search/${id}`)
        .toPromise()
        .then((response: Items) => {
            return response
        })
    }  
}
