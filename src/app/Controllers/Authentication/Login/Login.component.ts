import { GeneralInfoComponent } from './../Register/general-info/general-info.component';
import { ForgetPasswordComponent } from './../forget-password/forget-password.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openForgetPassword(): void {
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '40%',
      position: { left:'6.5%', top:'10%' },

    });


  }

  openRegister()
  {
    this.dialog.closeAll();
     this.dialog.open(GeneralInfoComponent, {
      width: '50%',
      position: { left:'25%', top:'-3%' },

    });

  }
}
