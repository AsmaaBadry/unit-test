import { TitlecasePipe } from './titlecase.pipe';

describe('TitlecasePipe', () => {
  const pipe = new TitlecasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });
});
