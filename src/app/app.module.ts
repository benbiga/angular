import { PipesComponent } from './pipes.component';
import { AuthorsComponent } from './authors.component';
import { AuthosService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CoursesComponent} from './courses.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
