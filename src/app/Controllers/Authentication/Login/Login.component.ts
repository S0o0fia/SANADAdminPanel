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
      width: '25%',
      position: { left:'11%', top:'11%' },

    });


  }
}
