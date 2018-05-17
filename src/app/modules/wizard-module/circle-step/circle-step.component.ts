import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-step',
  templateUrl: './circle-step.component.html',
  styleUrls: ['./circle-step.component.scss']
})
export class CircleStepComponent {
  @Input() active: number;
  @Input() steps: string[];
}
