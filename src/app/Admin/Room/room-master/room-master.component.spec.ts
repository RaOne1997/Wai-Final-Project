import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMasterComponent } from './room-master.component';

describe('RoomMasterComponent', () => {
  let component: RoomMasterComponent;
  let fixture: ComponentFixture<RoomMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
