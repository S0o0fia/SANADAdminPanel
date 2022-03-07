import { BrancheInfoComponent } from '../../../Controllers/Authentication/Register/branche-info/branche-info.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-branche-info-form',
  templateUrl: './branche-info-form.component.html',
  styleUrls: ['./branche-info-form.component.scss']
})
export class BrancheInfoFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BrancheInfoComponent> , public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Next()
  {

  }

}
