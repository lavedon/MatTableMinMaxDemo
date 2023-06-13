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
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) {
      dialogRef.disableClose = true;
    }
    state: string = 'normal';

    ngOnInit(): void {
      this.dataSource = new MatTableDataSource(this.data.data);
    }

    maximize() {
      if (this.state === 'normal') {
      this.dialogRef.updateSize('100vw', '100vh');
      this.dialogRef.updatePosition({ top: '0'});
      this.state = 'maximized';
      } else if (this.state === 'minimized' || this.state === 'maximized') {
        this.dialogRef.updateSize('80vw', '80vh');
        this.dialogRef.updatePosition({ top: '10%', left: '10%' });
        this.state = 'normal';
      }
    }

    minimize() {
      this.dialogRef.updateSize('50vw', '50px');
      this.dialogRef.updatePosition({ bottom: '0px' });
      this.state = 'minimized';
    }

    close() {
      this.dialogRef.close();
    }
}
