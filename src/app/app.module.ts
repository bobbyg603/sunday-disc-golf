import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { PlayersComponent } from './components/players/players.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesService } from './services/courses.service';
import { PlayersService } from './services/players.service';

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
