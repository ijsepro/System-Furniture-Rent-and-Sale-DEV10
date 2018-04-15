import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SellerComponent } from './seller_signup/seller.component';
import { GigsLayoutComponent } from './gigs-layout/gigs-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    GigsLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
