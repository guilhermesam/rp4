import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Participants } from 'src/shared/participants.models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public user: Participants

  ngOnInit(): void {
    this.user = this.loginService.getStoredParticipant()
  }
}
