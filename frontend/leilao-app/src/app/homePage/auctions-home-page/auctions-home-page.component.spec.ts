import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsHomePageComponent } from './auctions-home-page.component';

describe('AuctionsHomePageComponent', () => {
  let component: AuctionsHomePageComponent;
  let fixture: ComponentFixture<AuctionsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
