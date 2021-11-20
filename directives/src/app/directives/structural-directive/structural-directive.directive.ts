import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]',
})

// This directive attach something only if the condition is false -> unless
export class StructuralDirectiveDirective {
  @Input() set appStructuralDirective(condition: boolean) { 
    if (!condition) {
      // Create the template and insert it in the referenced view
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // remove the referenced view
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
