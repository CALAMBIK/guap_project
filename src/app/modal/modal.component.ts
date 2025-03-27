import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Feedback } from '../models/feedback';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  imports: [MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  readonly dialogRef = inject(MatDialogRef<ModalComponent>);
  readonly data = inject<Feedback>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
