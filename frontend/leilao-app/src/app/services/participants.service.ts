import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participants } from 'src/shared/participants.models';

@Injectable()
export class ParticipantsService {
  constructor(private http: HttpClient) { }

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