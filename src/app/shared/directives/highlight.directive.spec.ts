import {HighlightDirective} from './highlight.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {testCoursesData} from '../pipes/test-courses-data';
import {By} from '@angular/platform-browser';
import {ICourseModel} from '../../courses/components/interface/courses.model';
import { BorderColors } from '../constants/constants';

@Component({
  template: `
    <div [appHighlight]="testCoursesData[0].publishedAt">Default color</div>
    <div [appHighlight]="testCoursesData[1].publishedAt">Blue color</div>
    <div [appHighlight]="testCoursesData[2].publishedAt">Green color</div>
  `
})
class TestHighlightComponent {
  testCoursesData: ICourseModel[] = testCoursesData;
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHighlightComponent>;
  let allDivs: DebugElement[];
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestHighlightComponent],
    })
      .createComponent(TestHighlightComponent);
    fixture.detectChanges();
    allDivs = fixture.debugElement.queryAll(By.directive(HighlightDirective));
  });

  it('should have three highlighted elements', () => {
    expect(allDivs.length).toBe(3);
  });

  it(`should have default on first div element`, () => {
    const div: HTMLElement = allDivs[0].nativeElement as HTMLDivElement;
    expect(div.style.border).toBe('');
  });

  it(`should have skyblue on third div element`, () => {
    const div: HTMLElement = allDivs[1].nativeElement as HTMLDivElement;
    expect(div.style.border).toBe(`2px solid ${BorderColors.skyblue}`);
  });

  it(`should have lighgreen on second div element`, () => {
    const div: HTMLElement = allDivs[2].nativeElement as HTMLDivElement;
    expect(div.style.border).toBe(`2px solid ${BorderColors.lightgreen}`);
  });
});

