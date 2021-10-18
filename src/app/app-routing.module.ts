import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {path:'check-out' , component :CheckOutComponent},
  {path:'' ,pathMatch:'full', redirectTo :'/check-out'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
