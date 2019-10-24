import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[add-component]',
})
export class ComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}