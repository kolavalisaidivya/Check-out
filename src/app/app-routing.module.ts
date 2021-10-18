import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { NextComponent } from './next/next.component';

const routes: Routes = [
  {path:'check-out' , component :CheckOutComponent},
  {path:'next' , component :NextComponent},
  {path:'' ,pathMatch:'full', redirectTo :'/check-out'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
