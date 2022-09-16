import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcontaintComponent } from './accountcontaint.component';

describe('AccountcontaintComponent', () => {
  let component: AccountcontaintComponent;
  let fixture: ComponentFixture<AccountcontaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountcontaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountcontaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
