import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCardMostViwedComponent } from './auction-card-most-viwed.component';

describe('AuctionCardMostViwedComponent', () => {
  let component: AuctionCardMostViwedComponent;
  let fixture: ComponentFixture<AuctionCardMostViwedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionCardMostViwedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCardMostViwedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
