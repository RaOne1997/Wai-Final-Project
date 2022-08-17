import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinformationComponent } from './userinformation.component';

describe('UserinformationComponent', () => {
  let component: UserinformationComponent;
  let fixture: ComponentFixture<UserinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
