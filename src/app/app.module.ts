import { LoginComponent } from './Controllers/Authentication/Login/Login.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgetPasswordComponent } from './Controllers/Authentication/forget-password/forget-password.component';
import { GeneralInfoComponent } from './Controllers/Authentication/Register/general-info/general-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LicenceInfoComponent } from './Controllers/Authentication/Register/licence-info/licence-info.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AggrementInfoComponent } from './Controllers/Authentication/Register/aggrement-info/aggrement-info.component';
import { BrancheInfoComponent } from './Controllers/Authentication/Register/branche-info/branche-info.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BrancheInfoFormComponent } from './Pages/Register/branche-info-form/branche-info-form.component';
import { BusinessInfoFormComponent } from './Pages/Register/business-info-form/business-info-form.component';
import { HomeInfoFormComponent } from './Pages/Register/home-info-form/home-info-form.component';
import { SocialInfoFormComponent } from './Pages/Register/social-info-form/social-info-form.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SMSVerificationComponent } from './Controllers/Authentication/Register/smsverification/smsverification.component';
import { BankInfoComponent } from './Controllers/Authentication/Register/bank-info/bank-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerInfoComponent } from './Controllers/Authentication/Register/owner-info/owner-info.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    GeneralInfoComponent,
    LicenceInfoComponent,
    AggrementInfoComponent,
    BrancheInfoComponent,
    BrancheInfoFormComponent,
    BusinessInfoFormComponent,
    HomeInfoFormComponent,
    SocialInfoFormComponent,
    SMSVerificationComponent,
    BankInfoComponent,
    OwnerInfoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CdkAccordionModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
