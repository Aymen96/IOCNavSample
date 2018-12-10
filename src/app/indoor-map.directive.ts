import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIndoorMap]'
})
export class IndoorMapDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
