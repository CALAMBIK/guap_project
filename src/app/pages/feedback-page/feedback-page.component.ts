import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feedback-page',
  imports: [],
  templateUrl: './feedback-page.component.html',
  styleUrl: './feedback-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackPageComponent {}
