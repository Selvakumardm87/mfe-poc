import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListingComponent } from './class-listing.component';

const routes: Routes = [
    {
        path:'',
        component: ClassListingComponent
    },
    {
      path: 'toc',
      loadChildren: () => import('tocViewer/Module').then(m => m.TocViewerModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassListingRoutingModule { }
