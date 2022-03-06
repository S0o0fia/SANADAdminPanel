import { LoginComponent } from './Controllers/Authentication/Login/Login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path : 'Login' , component : LoginComponent},
   {path : '' , redirectTo:'Login' , pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
