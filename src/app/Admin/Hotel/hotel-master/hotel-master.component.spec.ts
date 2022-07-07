import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelMasterComponent } from './hotel-master.component';

describe('HotelMasterComponent', () => {
  let component: HotelMasterComponent;
  let fixture: ComponentFixture<HotelMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
