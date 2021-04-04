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

  private participant: Participants

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


  private matchParticipant(username: string, password: string): Promise<Participants> {
    return new Promise((resolve, reject) => {
      this.getParticipantUsername(username).then((participant: Participants) => {
        if (participant.username != username || participant.password != password) {
          window.alert("\nLogin ou senha incorretors !")
          resolve(null)

        } else if (participant.name == undefined || participant.password == undefined) {
          window.alert("\nLogin ou senha invalidos !")
          resolve(null)
        } else if (participant.username == username && participant.password == password) {
          resolve(participant)
        }
      })
    })
  }

  public getStoredParticipant(): Participants {
    var storedParticipant: Participants
    storedParticipant = new Participants
    storedParticipant.id = localStorage.getItem('idParticipant')
    storedParticipant.name = localStorage.getItem('nameParticipant')
    storedParticipant.username = localStorage.getItem('userParticipant')
    storedParticipant.email = localStorage.getItem('emailParticipant')
    storedParticipant.phone = localStorage.getItem('phoneParticipant')
    return storedParticipant
  }

  public storeParticipant(response: Participants): void {
    localStorage.setItem('idParticipant', response.id)
    localStorage.setItem('nameParticipant', response.name)
    localStorage.setItem('userParticipant', response.username)
    localStorage.setItem('emailParticipant', response.email)
    localStorage.setItem('phoneParticipant', response.phone)
  }

  public clearStoredParticipant(): void {
    localStorage.removeItem('idParticipant')
    localStorage.removeItem('nameParticipant')
    localStorage.removeItem('userParticipant')
    localStorage.removeItem('emailParticipant')
    localStorage.removeItem('phoneParticipant')
  }

  public login(username: string, password: string): Promise<Participants> {
    return new Promise((resolve, reject) => {
      this.matchParticipant(username, password).then((response: Participants) => {
        if (response != null) {
          //Adcionar a chamada para receber o token do Guilherme
          //Armazenar o tokenqqqq

          this.router.navigate(['/administration'])
          resolve(response)
        } else {
          //Rejeitar e manter na pagina
          this.router.navigate(['/login'])
          resolve(null)
        }
      })
    })
  }


}
