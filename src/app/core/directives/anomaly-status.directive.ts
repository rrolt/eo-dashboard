import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[dashboardAnomalyStatus]'
})
export class AnomalyStatusDirective {
  @Input('status') set status(value: string) {
    this.setStyle(value);
    this.setContent(value);
  }

  constructor(private el: ElementRef) {}

  private setStyle(value: string) {
    this.el.nativeElement.style.padding = '5px';
    this.el.nativeElement.style.borderRadius = '5px';

    let color: string, background: string;

    switch (value) {
      case 'pending' || 'created':
        background = '#e23535';
        color = '#fff';
        break;

      case 'in_progress':
        background = '#24292d';
        color = '#fff';
        break;

      case 'resolved':
        background = '#41b771';
        color = '#fff';
        break;

      default:
        background = '#ececec';
        color = '#3c3c3c';
        break;
    }

    this.el.nativeElement.style.background = background;
    this.el.nativeElement.style.color = color;
  }

  private setContent(value: string) {
    this.el.nativeElement.innerHTML = value.replace(/_/g, ' ');
  }
}
