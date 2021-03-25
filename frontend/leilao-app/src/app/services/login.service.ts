import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participants } from '../../shared/participants.models';

@Injectable()
export class LoginService {
  constructor(private http : HttpClient) { }

  public participants : Participants[]

  public getParticipants(): Promise<Participants[]>{
    console.log("Rodando aqui");
    
    return this.http.get('http://localhost:3333/participants/search/all')
    .toPromise()
    .then((response: Participants[])=> response)
  }

}
