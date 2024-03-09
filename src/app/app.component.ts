import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule}  from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SidebarModule,
    CommonModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    ],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  sidebarVisible: boolean = false;
}
