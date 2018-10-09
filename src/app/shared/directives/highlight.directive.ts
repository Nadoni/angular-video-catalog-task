import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input('appHighlight') highlightColor: Date;
  private dateOffset = 14;
  private currentDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('el', el);
    console.log('el. value', el.nativeElement.value);
  }

  ngAfterViewInit(): void {
    this.setBorder();
  }


  // this.currentDate = new Date.now();
  private highlight(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }

  setBorder() {
    const currentDate = new Date();
    const currentDateMillisec = currentDate.getTime();
    const fourteenDay: number = new Date(0).setDate(this.dateOffset);
    const fourteenDaysAgo = currentDateMillisec - fourteenDay;
    const coursePublishedDate = new Date(this.highlightColor).getTime();
    console.log('fourteenDaysAgo', fourteenDaysAgo);
    console.log('coursePublishedDate', coursePublishedDate);
    console.log('fourteenDay', fourteenDay);
    console.log('currentDate', currentDate);

    if (coursePublishedDate < currentDateMillisec && coursePublishedDate >= fourteenDaysAgo) {
      this.highlight('#aae4af');
    } else if (coursePublishedDate > currentDateMillisec) {
      this.highlight('#7bbaf3');
    } else {
      return;
    }
  }


}
