import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Items } from 'src/shared/items.model'

@Injectable()
export class ItemsService{
    
    constructor(private http: HttpClient){
    }

    options = {
        headers: new HttpHeaders().append('Content-type', 'application/json')
    }

    public createItem(item: Items): Observable<any> {
        return this.http.post(
            "/api/items/create",
             JSON.stringify(item), 
             this.options)
    }

    public getavailableItems(): Promise<Items[]>{
        return this.http.get("/api/items/search/available")
        .toPromise()
        .then((response: Items[]) => {
            return response
        })
    }
}