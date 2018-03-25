import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { AddCourseComponent } from './components/add/course/add-course.component';
import { CourseComponent } from './components/courses/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesService } from './services/courses.service';
import { AddScorecardComponent } from './components/add/scorecard/add-scorecard.component';
import { ScorecardComponent } from './components/scorecards/scorecard/scorecard.component';
import { ScorecardsComponent } from './components/scorecards/scorecards.component';
import { ScorecardsService } from './services/scorecards.service';
import { PlayersComponent } from './components/players/players.component';
import { PlayersService } from './services/players.service';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AuthenticationService } from './services/authentication.service';
import { StoreComponent } from './components/store/store.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'scorecards', component: ScorecardsComponent },
  { path: 'courses/new', component: AddCourseComponent, },
  { path: 'scorecards/new', component: AddScorecardComponent, },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CoursesComponent,
    ScorecardsComponent,
    ScorecardComponent,
    LeaderboardComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CourseComponent,
    AddCourseComponent,
    AddScorecardComponent,
    StoreComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    CoursesService,
    PlayersService,
    ScorecardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
