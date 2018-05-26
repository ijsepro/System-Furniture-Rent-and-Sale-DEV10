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
import { ConnectComponent } from './view/connect/connect.component';
import { CommentsComponent } from './view/comments/comments.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { FooterComponent } from './view/footer/footer.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { GigPageComponent } from './Gig-Page/gig-page/gig-page.component';

const appRoutes: Routes = [
  { path: 'view/sign-in', component: SignInComponent },
  { path: 'view', component: ViewComponent },

];

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
    GigSliderComponent,
    ConnectComponent,
    CommentsComponent,
    AboutUsComponent,
    FooterComponent,
    SignInComponent,
    GigPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
