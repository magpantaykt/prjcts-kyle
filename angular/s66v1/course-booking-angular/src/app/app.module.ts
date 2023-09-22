// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HighlightsComponent } from './components/highlights/highlights.component'; // Imports the root component
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';


const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

// @NgModule is a decorator used to define and configure angular modules
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HighlightsComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, // Imports the BrowserModule to enable running in a browser environment.
    RouterModule.forRoot(appRoute), // module provided by Angular which is used for implementing routing in our application.
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Specifies the root component to boostrap the application
})
export class AppModule { } // Define the AppModule class as the application's root module
