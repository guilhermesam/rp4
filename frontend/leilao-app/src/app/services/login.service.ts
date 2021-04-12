import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { rejects } from 'node:assert';
import { element, promise } from 'protractor';
import { Observable } from 'rxjs';
import { TokenMod } from 'src/shared/token.model';
import { Participants } from '../../shared/participants.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }


  options = {
    headers: new HttpHeaders().append('Content-type', 'application/json')
  }



  private getParticipantEmail(email: string): Promise<Participants> {
    return this.http.get(`/api/participants/search/email/${email}`)
    .toPromise()
    .then((response: Participants) => response)
  }



  public generateToken(token: TokenMod): Observable<any> {
    return this.http.post('/api/participants/login', JSON.stringify(token), this.options)
  }


  public getStatusLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.evaluateToken() != false) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  private storeToken(token: string): boolean {
    if (token != null) {
      localStorage.setItem("token", token)
      return true
    } else {
      return false
    }
  }

  public getStoredToken(): string {
    return localStorage.getItem('token')
  }

  private clearStoredToken(): boolean {
    if (localStorage.getItem('token').length > 0 && localStorage.getItem('token') != null) {
      localStorage.removeItem('token')
      return true
    } else {
      return false
    }
  }

  private evaluateToken():boolean {
    if (localStorage.getItem('token').length  > 0 && localStorage.getItem('token') != null) {
        return true
    } else {
      return false
    }
  }

 
  public getStoredParticipant(): Participants {
    var storedParticipant: Participants
    storedParticipant = new Participants
    storedParticipant.id = localStorage.getItem('idParticipant')
    storedParticipant.name = localStorage.getItem('nameParticipant')
    storedParticipant.userName = localStorage.getItem('userParticipant')
    storedParticipant.email = localStorage.getItem('emailParticipant')
    storedParticipant.phone = localStorage.getItem('phoneParticipant')
    return storedParticipant
  }

  public storeParticipant(response: Participants): void {
    localStorage.setItem('idParticipant', response.id)
    localStorage.setItem('nameParticipant', response.name)
    localStorage.setItem('userParticipant', response.userName)
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

  public matchParticipant(email):Promise<Participants>{
    return new Promise((resolve, reject)=>{
      this.getParticipantEmail(email).then((response: Participants)=>{
        if(response != null || response != undefined){
          resolve(response)
        } else {
          resolve(null)
        }
      })
    })
  }

  public login(email: string, tok: string): Promise<Participants> {
    return new Promise((resolve, reject) => {
      this.matchParticipant(email).then((response: Participants) => {
        if (response != null) {
          this.storeParticipant(response);
          this.storeToken(tok)
          this.router.navigate(['/administration'])
          resolve(response)
        } else {
          
          
          this.router.navigate(['/login'])
          resolve(null)
        }
      })
    })
  }



  public logout(): void {
    this.clearStoredParticipant()
    this.clearStoredToken()
    this.router.navigate(['/login'])
  }

}
