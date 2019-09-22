import { randomId } from './';

describe('Utility: randomId', () => {
  it('returns a string', () => {
    expect(typeof randomId()).toBe('string');
  });

  it('can have a custom length', () => {
    const test = randomId(8);

    expect(test.length).toBe(8);
  });

  it('can have custom characters', () => {
    const test = randomId(3, 'a');

    expect(test[0]).toBe('a');
    expect(test[1]).toBe('a');
    expect(test[2]).toBe('a');
  });
});
