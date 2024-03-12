import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    console.log(this.data)
  }
}
