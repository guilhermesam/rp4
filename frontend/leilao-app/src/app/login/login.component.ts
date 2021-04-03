import { Component, OnInit } from '@angular/core';
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

  public assingParticipants(participants: Participants[]) {
    return this.participants = participants
  }

  public getParticipants(): Promise<Participants[]> {
    return new Promise((resolve, reject) => {
      this.loginService.getParticipants()
        .then((participants: Participants[]) => {
          this.participants = participants
          resolve(this.assingParticipants(participants))
        }).catch((param: any) => {
          console.log(param);
        })
    })

  }

  public getParticipantsL(): Participants[] {
    return this.participants
  }


  public logar(): void {
    this.loginService.login(this.formulario.value.username, this.formulario.value.password)
  }
}
