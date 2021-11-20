import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appEventCustomDirective]',
})
export class EventCustomDirectiveDirective implements OnInit {
  // Property binding
  @Input() highlightColor: string = 'yellow';
  // This property has an alias with the same name as the directive
  // the alias is used when the directive has a unique o property to bind or at least one main property
  @Input('appEventCustomDirective') defaultColor: string = 'transparent';
  // Change element's properties (the style...) by this decorator
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.padding') padding: string = '5px';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  // If you want to use eventData inside mouseover(), you have to do pass $event explicitly. Otherwise it wouldn't work.
  // mouseenter is the event that invokes this methods and apply this style to the element
  @HostListener('mouseenter', ['$event']) mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }

  @HostListener('mouseleave', ['$event']) mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }
}
