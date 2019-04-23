import { NgModule } from '@angular/core';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { CanvasCardComponent } from '../components/dashboard/canvas-card/canvas-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { TypeService } from '../service/type.service';
import { EtatService } from '../service/etat.service';
import { EtatPersonalService } from '../service/etat-personal.service';
import { TableCardComponent } from '../components/dashboard/table-card/table-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CanvasCardComponent,
    TableCardComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    TypeService,
    EtatService,
    EtatPersonalService
  ]
})
export class DashboardModule { }
