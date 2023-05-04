import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverCredentialsComponent } from './recover-credentials.component';

describe('RecoverCredentialsComponent', () => {
  let component: RecoverCredentialsComponent;
  let fixture: ComponentFixture<RecoverCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
