import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { SliderComponent } from './view/slider/slider.component';
import { JumbotronComponent } from './view/jumbotron/jumbotron.component';
import { WelcomeSectionComponent } from './view/welcome-section/welcome-section.component';
import { GoleComponent } from './view/gole/gole.component';
import { SectionComponent } from './view/section/section.component';
import { FixedAreaComponent } from './view/fixed-area/fixed-area.component';
import { TeamComponent } from './view/team/team.component';
import { ProggressComponent } from './view/proggress/proggress.component';
import { PhilosophyComponent } from './view/philosophy/philosophy.component';
import { GigSliderComponent } from './view/gig-slider/gig-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavBarComponent,
    SliderComponent,
    JumbotronComponent,
    WelcomeSectionComponent,
    GoleComponent,
    SectionComponent,
    FixedAreaComponent,
    TeamComponent,
    ProggressComponent,
    PhilosophyComponent,
    GigSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
