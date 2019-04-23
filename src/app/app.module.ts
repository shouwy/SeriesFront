import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './module/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CanvasCardComponent } from './components/dashboard/canvas-card/canvas-card.component';
import { TypeService } from './service/type.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    DashboardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
