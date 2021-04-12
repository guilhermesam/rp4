import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Participants } from 'src/shared/participants.models';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  constructor(private http: HttpClient, private router: Router) { }

  public participants: Participants[]


  public getParticipants(): Promise<Participants[]> {
    return this.http.get('http://localhost:3333/participants/search/all')
      .toPromise()
      .then((response: Participants[]) => response)

  }

  public getParticipantsByID(id: string): Promise<Participants> {
    return this.http.get(`http://localhost:3333/participants/search/${id}`)
      .toPromise()
      .then((response: Participants) => {
        return response
      })
  }

}