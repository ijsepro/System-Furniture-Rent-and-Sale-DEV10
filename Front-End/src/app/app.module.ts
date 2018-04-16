import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { SliderComponent } from './view/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
