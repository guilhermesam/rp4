import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Items } from '../shared/items.model'

@Injectable()
export class AuctionsService {
   
    constructor(private http : HttpClient) { }
    public items : Items[]
    public getAuctions(): Promise<Items[]>{
        return this.http.get('http://localhost:3333/items/search/all')
            .toPromise()
            .then((resposta: Items[]) => resposta)
            
    }
}
