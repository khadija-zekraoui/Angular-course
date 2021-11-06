import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // We retrieve the element to apply changes to it
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    //Like changing its style
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.padding = '5px';
  }
}
