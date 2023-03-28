import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import {animation} from '@angular/animations';

@Directive({
  selector: '[hover]',
})
export class HoverDirective {
  @HostListener('mouseenter') onMouseEnter() {
    // this.element.nativeElement.style.color = 'red';
    this.element.nativeElement
      .animate([{color: 'red'}], {
        duration: 1000,
        delay: 0,
        easing: 'ease-in-out',
        trigger: 'enter',
      })
      .play();
  }
  @HostListener('mouseleave') onMouseLeve() {
    // this.element.nativeElement.style.color = 'black';
    this.element.nativeElement
      .animate([{color: 'black'}], {
        duration: 5000,
        trigger: 'enter',
        easing: 'ease-in-out',
        delay: 1000,
      })
      .play();
  }
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}
}
