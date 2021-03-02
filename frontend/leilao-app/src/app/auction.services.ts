import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuctionsService {
   
    constructor(private http : HttpClient) { }

    public getAuctions(): Promise<any[]>{
        // efetuar requisição http
        this.http.get()
    }
}
