import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PlayersComponent } from './components/players/players.component';
import { ScoresComponent } from './components/scores/scores.component';
import { CoursesService } from './services/courses.service';
import { PlayersService } from './services/players.service';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { CourseComponent } from './components/courses/course/course.component';
import { AddCourseComponent } from './components/add/course/add-course.component';
import { AddCourseAddressComponent } from './components/add/course/address/add-course-address.component';
import { CourseBuilderEventService } from './services/coursebuilderevent.service';
import { CourseNameComponent } from './components/add/course/name/name.component';
import { AddCourseHoleComponent } from './components/add/course/hole/add-course-hole.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'scores', component: ScoresComponent },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    children: [
      { path: '', redirectTo: 'name', pathMatch: 'full' },
      { path: 'name', component: CourseNameComponent },
      { path: 'address', component: AddCourseAddressComponent },
      { path: 'hole/:number', component: AddCourseHoleComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CoursesComponent,
    ScoresComponent,
    ScorecardComponent,
    LeaderboardComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CourseComponent,
    AddCourseComponent,
    AddCourseAddressComponent,
    CourseNameComponent,
    AddCourseHoleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    CoursesService,
    CourseBuilderEventService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
