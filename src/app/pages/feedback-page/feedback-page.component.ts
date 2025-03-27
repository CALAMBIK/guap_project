import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { Feedback } from '../../models/feedback';

@Component({
  selector: 'app-feedback-page',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './feedback-page.component.html',
  styleUrl: './feedback-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackPageComponent {
  private readonly dialog = inject(MatDialog);

  public feedbackForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$'),
    ]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', [Validators.maxLength(500)]),
    queryType: new FormControl('', Validators.required),
  });

  public onSubmit(): void {
    if (this.feedbackForm.valid) {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '400px',
        data: this.feedbackForm.value,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('Модалка закрыта!');
        }
      });
    } else {
      console.log('Ошибка в форме!');
    }
  }
}
