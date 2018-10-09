import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform duration into 2 hours correctly', () => {
    expect(pipe.transform(7200)).toEqual('2h');
  });

  it('should transform duration into 35 minutes correctly', () => {
    expect(pipe.transform(2100)).toEqual(' 35m');
  });

  it('should transform duration into 14 seconds', () => {
    expect(pipe.transform(14)).toEqual(' 14s');
  });

  it('should transform duration into empty string', () => {
    expect(pipe.transform(0)).toEqual('');
  });

  it('should transform duration into empty string', () => {
    expect(pipe.transform(-1)).toEqual('');
  });
});

