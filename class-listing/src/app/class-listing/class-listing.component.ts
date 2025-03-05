import { Compiler, Component, ComponentFactory, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-listing',
  templateUrl: './class-listing.component.html',
  styleUrls: ['./class-listing.component.scss']
})
export class ClassListingComponent implements OnInit {
@ViewChild('toc_viewer', { read: ViewContainerRef})
tocViewerContainer!: ViewContainerRef;
componentRef: any;
componentFactories: ComponentFactory<any>[] = [];
  constructor(
    private compiler:Compiler,
    private injector: Injector,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadModuleTocViewer().then(({ TocViewerModule }) => {
      this.compiler.compileModuleAsync(TocViewerModule).then( moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        const componentFactory = moduleRef.componentFactoryResolver
          .resolveComponentFactory(
            TocViewerModule.ɵmod.exports.find((component: { name: string}) => component.name === 'TocComponent')
          )
          if(this.componentRef){
            this.tocViewerContainer.remove();
            this.componentRef = null;
          }
          this.componentRef = this.tocViewerContainer.createComponent(componentFactory);

      })
    })
  }

  loadModuleTocViewer = (): Promise<any> => {
    return import('tocViewer/Module');
  }
}
