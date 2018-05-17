import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleStepComponent } from './circle-step/circle-step.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CircleStepComponent],
  exports: [CircleStepComponent]
})
export class WizardModule {}
