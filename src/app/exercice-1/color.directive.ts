import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color') color: string;

  @HostListener('window:keyup', ['$event']) windowKeyUp($event) {
    switch ($event.keyCode) {
      case 37:
        this.color = 'purple';
        break;
      case 38:
        this.color = 'red';
        break;
      case 39:
        this.color = 'blue';
        break;
      case 40:
        this.color = 'green';
        break;
    }
  }
  constructor() {}
}
