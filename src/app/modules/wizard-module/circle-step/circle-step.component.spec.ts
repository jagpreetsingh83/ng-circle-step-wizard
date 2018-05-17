import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepWizardCircleComponent } from './step-wizard-circle.component';

describe('StepWizardCircleComponent', () => {
  let component: StepWizardCircleComponent;
  let fixture: ComponentFixture<StepWizardCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepWizardCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepWizardCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
