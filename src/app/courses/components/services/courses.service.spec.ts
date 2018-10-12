import {TestBed} from '@angular/core/testing';
// import {testCoursesData} from '@test-data/test-courses-data';
import {CoursesService} from './courses.service';


describe('CoursesService', () => {
  let service: CoursesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesService,
      ]
    });
    service = TestBed.get(CoursesService);

  });

  it('should be created', () => {
    // const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });

  it('should return value from observable', (done: DoneFn) => {
    // const service: CoursesService = TestBed.get(CoursesService);
    service.getAllCourses().subscribe(value => {
      expect(value).toEqual(jasmine.any(Object));
      done();
    });
  });
});
