import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participants } from 'src/shared/participants.models';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  public formulario: FormGroup = new FormGroup({
    'username': new FormControl(null),
    'password': new FormControl(null)
  })


  public participants: Participants[]
  public participant: Participants

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  public logar(): void {
    this.loginService.login(this.formulario.value.username, this.formulario.value.password).then((response: Participants)=>{
      this.loginService.storeParticipant(response)
    })
  }
}
