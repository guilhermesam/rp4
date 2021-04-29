import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-charity-auction',
  templateUrl: './charity-auction.component.html',
  styleUrls: ['./charity-auction.component.css']
})
export class CharityAuctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public donateModal(): void{}

  public formModal: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'city': new FormControl(null),
    'state': new FormControl(null),
    'phone': new FormControl(null),
    'email': new FormControl(null),
    'description': new FormControl(null),
  })

  
}
