import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTicketComponent } from './booking-ticket.component';

describe('BookingTicketComponent', () => {
  let component: BookingTicketComponent;
  let fixture: ComponentFixture<BookingTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
