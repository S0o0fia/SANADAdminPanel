import { LoginComponent } from './../Login/Login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<LoginComponent>) {

    }

  ngOnInit(): void {
  }


}
