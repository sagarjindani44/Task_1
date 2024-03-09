import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProComponent } from './account-pro.component';

describe('AccountProComponent', () => {
  let component: AccountProComponent;
  let fixture: ComponentFixture<AccountProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
