import { Component, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { ComponentDirective } from './component.directive';
import { createComponent } from './models/component';
import { DataService } from './data.service';
import { ComponentItem } from './component-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Assesment Test - Tilak Bhandari';
  @ViewChild(ComponentDirective, {static: true}) adHost: ComponentDirective;
  comp : ComponentItem[];
  constructor(
    private ds: DataService,
    private componentFactoryResolver: ComponentFactoryResolver
  ){

  }
  ngOnInit(){
    this.comp = this.ds.getComponent();
    for(let i=0;i<this.comp.length;i++){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.comp[i].component);
      const viewContainerRef = this.adHost.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<createComponent>componentRef.instance).data = this.comp[i].data;
    }

  }
  
}
