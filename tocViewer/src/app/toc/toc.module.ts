import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TocComponent } from './toc.component';
import { TocRoutingModule } from './toc-routing.module';



@NgModule({
  declarations: [
    TocComponent
  ],
  imports: [
    CommonModule,
    TocRoutingModule
  ],
  exports:[
    TocComponent
  ]
})
export class TocViewerModule { }
