import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { CoursesComponent } from './courses/courses.component';

const appRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'courses', component: CoursesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CoursesComponent
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
