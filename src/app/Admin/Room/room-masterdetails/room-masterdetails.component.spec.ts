import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMasterdetailsComponent } from './room-masterdetails.component';

describe('RoomMasterdetailsComponent', () => {
  let component: RoomMasterdetailsComponent;
  let fixture: ComponentFixture<RoomMasterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomMasterdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomMasterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
