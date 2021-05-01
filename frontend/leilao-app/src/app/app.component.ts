import { Component } from '@angular/core';
import { LoginServiceParticipant } from './services/loginParticipant.service';
import { LoginServiceAuctioneer } from './services/loginAuctioneer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginServiceParticipant, LoginServiceAuctioneer  ]
})
export class AppComponent {
  title = 'leilao-app';
}
