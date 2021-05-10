import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Participants } from 'src/shared/participants.models';
import { TokenMod } from 'src/shared/token.model';
import { LoginServiceParticipant } from '../services/loginParticipant.service';
import { LoginServiceAuctioneer } from '../services/loginAuctioneer.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public participants: Participants[]
  public participant: Participants
  public options: any[]


  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null),
    'login': new FormControl(null)
  })

  constructor(
    private loginServiceParticipant: LoginServiceParticipant,
    private loginServiceAuctioneer: LoginServiceAuctioneer
    ) { }

  ngOnInit(): void {
    this.options = this.getLogins()

  }

  public loginParticipant(): void {
    if(this.formulario.value.login == "participant"){
      var tk = new TokenMod()
      tk.email = this.formulario.value.email
      tk.password = this.formulario.value.password
      console.log("TK: "+tk);
      this.loginServiceParticipant.matchParticipant(tk.email)
      this.loginServiceParticipant.generateToken(tk).subscribe((res)=>{
      this.loginServiceParticipant.login(tk.email, res)
      })
    }
    else{
      var tk = new TokenMod()
      tk.email = this.formulario.value.email
      tk.password = this.formulario.value.password
      console.log("TK: "+tk);
      this.loginServiceAuctioneer.matchAuctioneer(tk.email)
      this.loginServiceAuctioneer.generateToken(tk).subscribe((res)=>{
      this.loginServiceAuctioneer.login(tk.email, res)
      })
    }
  }

  public getLogins() {
    return[
      {value: 'participant', desc: 'Participante'},
      {value: 'auctioneer', desc: 'leiloeiro'}
    ]
  }
}
