import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  public author: string;
  public title: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) date
  ) {
    this.title = date.title;
    this.author = date.author;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close(true);
  }

}
