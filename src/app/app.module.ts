import { BrowserModule } from '@angular/platform-browser';
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
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'scores', component: ScoresComponent }
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
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    LoginService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
