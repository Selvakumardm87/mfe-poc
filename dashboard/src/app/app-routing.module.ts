import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'class-listing',
    loadChildren: () => import('classListing/Module').then(m => m.ClassListingModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('tocViewer/Module').then(m => m.TocViewerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
