import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HomeInsuranceComponent } from './home-insurance/home-insurance.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckOutComponent,
    ProgressBarComponent,
    HomeInsuranceComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
