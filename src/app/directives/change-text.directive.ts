import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(public el: ElementRef) { }
  @HostListener("mouseenter") onMouseEnter() {
    this.el.nativeElement.innerHTML = 'Text Changed to New Text';
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = 'white';

  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    this.el.nativeElement.innerHTML = 'Lorem Ipsum';
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.color = 'black';
  }
}
