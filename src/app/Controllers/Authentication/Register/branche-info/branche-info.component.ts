import { BankInfoComponent } from './../bank-info/bank-info.component';
import { SMSVerificationComponent } from './../smsverification/smsverification.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-branche-info',
  templateUrl: './branche-info.component.html',
  styleUrls: ['./branche-info.component.scss']
})
export class BrancheInfoComponent implements OnInit {
  items = ['Branche Info', 'Bussiness Info', 'Home Info', 'Social Info'];
  expandedIndex = 0;
  constructor(public dialogRef: MatDialogRef<BrancheInfoComponent> , public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Next()
  {
    const dialogRef = this.dialog.open(BankInfoComponent, {
      width: '100%',
      position : {top :'-6%' , left:'25%'}
    });

    this.dialogRef.close();

  }
}


