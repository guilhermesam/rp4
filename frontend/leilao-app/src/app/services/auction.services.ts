import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Category } from '../../shared/categories.model'
import { Items } from '../../shared/items.model'
import { CreateAuction } from 'src/shared/createAuction.model'
import { Observable } from 'rxjs'

@Injectable()
export class AuctionsService {
    constructor(private http : HttpClient) { }

    public items : Items[]
    public category: Category[]

    options = {
        headers: new HttpHeaders().append('Content-type', 'application/json')
    }

    public getAuctions(): Promise<Items[]>{
        return this.http.get('/api/items/search/all')
            .toPromise()
            .then((response: Items[]) => response)
    }

    public getCategories(): Promise<Category[]>{
        return this.http.get('/api/categories/search/allCategories')
            .toPromise()
            .then((response: Category[]) => response)

    }

    public getAuctionsByID(id: string): Promise<Items>{
        return this.http.get(`/api/items/search/${id}`)
        .toPromise()
        .then((response: Items) => {
            return response
        })
    }

    public createAuction(auction: CreateAuction): Observable<any> {
        return this.http.post(
            "/api/auctions/create",
             JSON.stringify(auction), 
             this.options)
    }


}
