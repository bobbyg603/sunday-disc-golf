import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PlayersComponent } from './components/players/players.component';
import { ScoresComponent } from './components/scores/scores.component';
import { CoursesService } from './services/courses.service';
import { PlayersService } from './services/players.service';
import { ScorecardComponent } from './components/scorecard/scorecard.component';

const appRoutes: Routes = [
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
    ScorecardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
