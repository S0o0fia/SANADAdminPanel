import { AggrementInfoComponent } from './../aggrement-info/aggrement-info.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-licence-info',
  templateUrl: './licence-info.component.html',
  styleUrls: ['./licence-info.component.scss']
})
export class LicenceInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LicenceInfoComponent> , public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  Next()
  {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(AggrementInfoComponent, {
      width: '120%',
      position : {top :'-1%' , left:'25%'}
    });

  }

}
