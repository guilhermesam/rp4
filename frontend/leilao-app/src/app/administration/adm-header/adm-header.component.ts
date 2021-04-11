import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import { Participants } from 'src/shared/participants.models';

@Component({
  selector: 'app-adm-header',
  templateUrl: './adm-header.component.html',
  styleUrls: ['./adm-header.component.css']
})
export class AdmHeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  public user: Participants

  ngOnInit(): void {
    this.user = this.loginService.getStoredParticipant()
  }
}
