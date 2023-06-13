import { OnInit, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from '../interfaces/i-dialog-data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'occupation'];
  dataSource: MatTableDataSource<{position: number, name: string, occupation: string}> = undefined!;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) {}

    ngOnInit(): void {
      this.dataSource = new MatTableDataSource(this.data.data);
    }

    maximize() {
      this.dialogRef.updateSize('100vw', '100vh');
    }

    minimize() {
      this.dialogRef.updateSize('50px', '50px');
    }
  

}
