import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListingComponent } from './class-listing.component';
import { ClassListingRoutingModule } from './class-listing-routing.module';



@NgModule({
  declarations: [
    ClassListingComponent
  ],
  imports: [
    CommonModule,
    ClassListingRoutingModule
  ]
})
export class ClassListingModule { }
