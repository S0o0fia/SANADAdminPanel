import { LicenceInfoComponent } from './../licence-info/licence-info.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GeneralInfoComponent> , public dialog: MatDialog) { }

  ngOnInit(): void {

  }

   public NextLicence()
  {

    this.dialogRef.close();
    this.dialog.open(LicenceInfoComponent, {
      width: '50%',
      position : {top :'-3%' , left:'25%'}
    });
  }

}
