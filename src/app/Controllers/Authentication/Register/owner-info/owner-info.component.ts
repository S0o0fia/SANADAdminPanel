import { SMSVerificationComponent } from './../smsverification/smsverification.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss']
})
export class OwnerInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OwnerInfoComponent> , public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  Next()
  {
    this.dialog.closeAll();
     this.dialog.open(SMSVerificationComponent, {
      width: '35%',
      position: { left:'35%', top:'8%' },

    });
  }

}
