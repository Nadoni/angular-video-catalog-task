import {OrderByPipe} from './order-by.pipe';
import {testCoursesData} from '../../test-data/test-courses-data';
import {ICourseModel} from '../../courses/interface/courses.model';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order array by publishedAt with the desc order', () => {
    const result = pipe.transform(testCoursesData, 'publishedAt');
    expect(result[0].id).toEqual(1);
    expect(result[1].id).toEqual(3);
    expect(result[2].id).toEqual(2);
  });

  it('should order array by publishedAt with the asc order', () => {
    const result = pipe.transform(testCoursesData, '-publishedAt');
    expect(result[0].id).toEqual(2);
    expect(result[1].id).toEqual(3);
    expect(result[2].id).toEqual(1);
  });

  it('should order array by title with the asc order', () => {
    const result = pipe.transform(testCoursesData, 'title');
    expect(result[0].id).toEqual(1);
    expect(result[1].id).toEqual(3);
    expect(result[2].id).toEqual(2);
  });

  it('should order array by title with the desc order', () => {
    const result = pipe.transform(testCoursesData, '-title');
    expect(result[0].id).toEqual(2);
    expect(result[1].id).toEqual(3);
    expect(result[2].id).toEqual(1);
  });
});


