import { OwnerInfoComponent } from './../owner-info/owner-info.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AggrementInfoComponent } from '../aggrement-info/aggrement-info.component';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  orderForm: any;
  items!: FormArray;
  constructor(private formBuilder: FormBuilder ,public dialogRef: MatDialogRef<BankInfoComponent> , public dialog: MatDialog) {}
  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
    this.addItem();
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      Country : ["" , Validators.required] ,
      City : ["" , Validators.required],
      Currency : ["" , Validators.required] ,
      Bank : ["" , Validators.required] ,
      BankName : ["" , Validators.required] ,
      AccountName : ["" , Validators.required] ,
      IBAN : ["" , Validators.required] ,
      SwiftCode : ["" , Validators.required],
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }


 Next()
 {
  this.dialog.closeAll();
  this.dialog.open(OwnerInfoComponent, {
   width: '50%',
   position : {top :'-6%' , left:'25%'}
 });

 }

}
