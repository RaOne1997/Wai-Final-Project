import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMasterDetailsComponent } from './city-master-details.component';

describe('CityMasterDetailsComponent', () => {
  let component: CityMasterDetailsComponent;
  let fixture: ComponentFixture<CityMasterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMasterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityMasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
