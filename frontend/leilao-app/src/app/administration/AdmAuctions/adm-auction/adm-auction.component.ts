import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adm-auction',
  templateUrl: './adm-auction.component.html',
  styleUrls: ['./adm-auction.component.css']
})
export class AdmAuctionComponent implements OnInit {

  constructor() { }

  public formulario: FormGroup = new FormGroup({
    'username': new FormControl(null),
    'password': new FormControl(null)
  })

  ngOnInit(): void {
  }

}
