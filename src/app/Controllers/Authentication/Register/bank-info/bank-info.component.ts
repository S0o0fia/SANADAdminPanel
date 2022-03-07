import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {

  form! :FormGroup;
  Banks!: FormArray;
  Controls :any;
  constructor(private fb : FormBuilder) {
    this.form = new FormGroup({
      Banks: new FormArray([])
    });
    this.AddBank();
   }


  ngOnInit(): void {
  }
  createItem(): FormGroup {
    return this.fb.group({
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
  getBanks ()
  {
    return this.form.controls["Banks"] as FormArray;
  }

  AddBank ()
  {
    this.Banks = this.form.get('Banks') as FormArray;
    this.Banks.push(this.createItem());
    this.Controls = this.getBanks();
  }

 Next()
 {}

}
