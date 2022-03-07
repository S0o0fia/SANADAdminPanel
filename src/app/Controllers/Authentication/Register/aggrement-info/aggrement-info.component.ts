import { GeneralInfoComponent } from './../general-info/general-info.component';
import { BrancheInfoComponent } from './../branche-info/branche-info.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LicenceInfoComponent } from '../licence-info/licence-info.component';

@Component({
  selector: 'app-aggrement-info',
  templateUrl: './aggrement-info.component.html',
  styleUrls: ['./aggrement-info.component.scss']
})
export class AggrementInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AggrementInfoComponent> , public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Next()
  {
     this.dialog.closeAll();
     this.dialog.open(BrancheInfoComponent, {
      width: '120%',
      position : {top :'-6%' , left:'25%'}
    });

  }

}
