import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { rejects } from 'node:assert';
import { element, promise } from 'protractor';
import { Observable } from 'rxjs';
import { TokenMod } from 'src/shared/token.model';
import { Auctioneer } from '../../shared/auctioneer';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceAuctioneer {
  constructor(private http: HttpClient, private router: Router) { }


  options = {
    headers: new HttpHeaders().append('Content-type', 'application/json')
  }

  private getAuctioneerEmail(email: string): Promise<Auctioneer> {
    return this.http.get(`/api/auctionners/search/email/${email}`)
    .toPromise()
    .then((response: Auctioneer) => response)
  }

  public generateToken(token: TokenMod): Observable<any> {
    return this.http.post('/api/auctioneers/login', JSON.stringify(token), this.options)
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

  public getStoredAuctioneer(): Auctioneer {
    var storedAuctioneer: Auctioneer
    storedAuctioneer = new Auctioneer
    storedAuctioneer.id = localStorage.getItem('idAuctioneer')
    storedAuctioneer.name = localStorage.getItem('nameAuctioneer')
    storedAuctioneer.email = localStorage.getItem('emailAuctioneer')
    storedAuctioneer.phone = localStorage.getItem('phoneAuctioneer')
    return storedAuctioneer
  }

  public storeAuctioneer(response: Auctioneer): void {
    localStorage.setItem('idAuctioneer', response.id)
    localStorage.setItem('nameAuctioneer', response.name)
    localStorage.setItem('emailAuctioneer', response.email)
    localStorage.setItem('phoneAuctioneer', response.phone)
  }

  public clearStoredAuctioneer(): void {
    localStorage.removeItem('idAuctioneer')
    localStorage.removeItem('nameAuctioneer')
    localStorage.removeItem('userAuctioneer')
    localStorage.removeItem('emailAuctioneer')
    localStorage.removeItem('phoneAuctioneer')
  }

  public matchAuctioneer(email):Promise<Auctioneer>{
    return new Promise((resolve, reject)=>{
      this.getAuctioneerEmail(email).then((response: Auctioneer)=>{
        if(response != null || response != undefined){
          resolve(response)
        } else {
          resolve(null)
        }
      })
    })
  }

  public login(email: string, tok: string): Promise<Auctioneer> {
    return new Promise((resolve, reject) => {
      this.matchAuctioneer(email).then((response: Auctioneer) => {
        if (response != null) {
          this.storeAuctioneer(response);
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
    this.clearStoredAuctioneer()
    this.clearStoredToken()
    this.router.navigate(['/login'])
  }

}
