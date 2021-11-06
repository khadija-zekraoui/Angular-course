import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEnhancedCustomDirective]',
})

export class EnhancedCustomDirectiveDirective implements OnInit {
  //It's always better not do access the DOM directly, for this reason renderer2 is used
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'style',
      'background-color:blue; color:white; padding:5px'
    );
  }
}
