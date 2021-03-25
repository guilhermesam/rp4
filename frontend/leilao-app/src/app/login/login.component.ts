import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participants } from 'src/shared/participants.models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public participants: Participants[]

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("Entrei no login");
    
    this.loginService.getParticipants()
    .then((participants: Participants[]) => {
      this.participants = participants
    }).catch((param:any)=>{
      console.log(param);
      
    })
    console.log("Imprimindo participantes");
    
    console.log(this.participants);
    
  }
  
  

}
