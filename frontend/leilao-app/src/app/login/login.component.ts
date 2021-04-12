import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Participants } from 'src/shared/participants.models';
import { TokenMod } from 'src/shared/token.model';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })


  public participants: Participants[]
  public participant: Participants

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  public logar(): void {
    tk: TokenMod
    var tk = new TokenMod()
    tk.email = this.formulario.value.email
    tk.password = this.formulario.value.password
    console.log("TK: "+tk);
    this.loginService.matchParticipant(tk.email)
    
    
    this.loginService.generateToken(tk).subscribe((res)=>{
      this.loginService.login(tk.email, res)
    })

  }
}
