import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import{FormsModule} from '@angular/forms'
import {FoodSearchPipe} from './food-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodSearchPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }