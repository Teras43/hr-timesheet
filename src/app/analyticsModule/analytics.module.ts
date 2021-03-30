import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsTableComponent } from './analytics-table/analytics-table.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [
    AnalyticsComponent,
    AnalyticsTableComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    MaterialModule
  ]
})
export class AnalyticsModule { }
