import { NgModule } from '@angular/core';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { CanvasCardComponent } from '../components/dashboard/canvas/app-canvas-card/canvas-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CanvasCardComponent
  ],
  imports: [
    MatGridListModule,
    MatCardModule
  ],
  providers: []
})
export class DashboardModule { }
