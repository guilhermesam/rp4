import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { rejects } from 'node:assert';
import { element, promise } from 'protractor';
import { Participants } from '../../shared/participants.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }

  public participants: Participants[]
  private match: boolean

  public getParticipants(): Promise<Participants[]> {
    return this.http.get('http://localhost:3333/participants/search/all')
      .toPromise()
      .then((response: Participants[]) => response)
  }

  public getParticipantUsername(username: string): Promise<Participants> {
    return this.http.get(`http://localhost:3333/participants/search/username/${username}`)
      .toPromise()
      .then((response: Participants) => response)
  }

  public getParticipantId(id: string): Promise<Participants> {
    return this.http.get(`http://localhost:3333/participants/search/${id}`)
      .toPromise()
      .then((response: Participants) => response)
  }


  private matchParticipant(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getParticipantUsername(username).then((participant: Participants) => {
        if (participant.username != username || participant.password != password) {
          window.alert("\nLogin ou senha incorretors !")
          resolve(false)

        } else if (participant.name == undefined || participant.password == undefined) {
          window.alert("\nLogin ou senha invalidos !")
          resolve(false)
        } else if (participant.username == username && participant.password == password) {
          resolve(true)
        }
      })
    })
  }

  public login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.matchParticipant(username, password).then((response: boolean) => {
        if (response == true) {
          //Adcionar a chamada para receber o token do Guilherme
          //Armazenar o token
          this.router.navigate([''])
          resolve(true)
        } else {
          //Rejeitar e manter na pagina
          this.router.navigate(['/login'])
          resolve(false)
        }
      })
    })
  }

}
