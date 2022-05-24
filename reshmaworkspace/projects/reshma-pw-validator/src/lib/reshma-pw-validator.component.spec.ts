import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReshmaPwValidatorComponent } from './reshma-pw-validator.component';

describe('ReshmaPwValidatorComponent', () => {
  let component: ReshmaPwValidatorComponent;
  let fixture: ComponentFixture<ReshmaPwValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReshmaPwValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReshmaPwValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
