// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HighlightsComponent } from './components/highlights/highlights.component'; // Imports the root component
import { NavbarComponent } from './components/navbar/navbar.component';

// @NgModule is a decorator used to define and configure angular modules
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HighlightsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule // Imports the BrowserModule to enable running in a browser environment.
  ],
  providers: [],
  bootstrap: [AppComponent] // Specifies the root component to boostrap the application
})
export class AppModule { } // Define the AppModule class as the application's root module
