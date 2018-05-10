import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { SliderComponent } from './view/slider/slider.component';
import { JumbotronComponent } from './view/jumbotron/jumbotron.component';
import { WelcomeSectionComponent } from './view/welcome-section/welcome-section.component';
import { GoleComponent } from './view/gole/gole.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavBarComponent,
    SliderComponent,
    JumbotronComponent,
    WelcomeSectionComponent,
    GoleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
