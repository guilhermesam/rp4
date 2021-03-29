import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Bids } from 'src/shared/bids.model'

@Injectable()
export class BidsService{
    
    constructor(private http: HttpClient){
    }

    options = {
        headers: new HttpHeaders().append('Content-type', 'application/json')
    }

    public makeBid(bid: Bids): Observable<any> {
        return this.http.post(
            "http://localhost:3333/bids/create",
             JSON.stringify(bid), 
             this.options)
    }
}