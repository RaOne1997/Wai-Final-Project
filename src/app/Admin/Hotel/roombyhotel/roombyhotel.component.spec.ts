import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombyhotelComponent } from './roombyhotel.component';

describe('RoombyhotelComponent', () => {
  let component: RoombyhotelComponent;
  let fixture: ComponentFixture<RoombyhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoombyhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoombyhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
