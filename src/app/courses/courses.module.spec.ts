import { CoursesModule } from './courses.module';

describe('CoursesModule', () => {
  let courseModule: CoursesModule;

  beforeEach(() => {
    courseModule = new CoursesModule();
  });

  it('should create an instance', () => {
    expect(courseModule).toBeTruthy();
  });
});
