import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minMaxDemo';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '250px',
      height: '250px',
      data: [
        {
          position: 1,
          name: 'John',
          occupation: 'Engineer'
        },
        {
          position: 2,
          name: 'Carl',
          occupation: 'Engineer'
        },
        {
          position: 3,
          name: 'Alex',
          occupation: 'Sales'
        },
        {
          position: 4,
          name: 'Ellen',
          occupation: 'Editor'
        },
        {
          position: 5,
          name: 'JohnA',
          occupation: 'Accountant'
        },
        {
          position: 6,
          name: 'Jill',
          occupation: 'Manager'
        }
      ]
    });
  }
}
