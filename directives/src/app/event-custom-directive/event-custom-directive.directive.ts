import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appEventCustomDirective]',
})
export class EventCustomDirectiveDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  // if you want to use eventData inside mouseover(), you have to do pass $event explicitly. Otherwise it wouldn't work.
  //mouseenter is the event that invokes this methods and apply this style to the element
  @HostListener('mouseenter', ['$event']) mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseleave', ['$event']) mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
