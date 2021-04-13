import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ItemProvider } from '../../shared/itemProvider.model'


@Injectable()
export class ItemProviderService {
    constructor(private http : HttpClient) { }

    public getItemProvider(name: string): Promise<ItemProvider>{
        return this.http.get(`http://localhost:3333/itemProvider/search/${name}`)
        .toPromise()
        .then((response: ItemProvider) => {
            return response
        })
    }  
}
