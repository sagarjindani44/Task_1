import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from "@angular/common/http";
import {  importProvidersFrom } from "@angular/core";
import { UsersService } from './app/users.service';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent,{
//   providers:[ UsersService, importProvidersFrom(HttpClientModule)]
// }).catch((err) => console.error(err));
