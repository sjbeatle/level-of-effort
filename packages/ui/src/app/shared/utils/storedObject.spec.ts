import { storedObject } from './';

fdescribe('Utility: storedObject', () => {
  describe('has property', () => {
    describe('get', () => {
      describe('that retrieves from localStorage', () => {
        beforeEach(() => {
          localStorage.removeItem('SO');
        });

        afterAll(() => {
          localStorage.clear();
        });

        it('and returns `null` if the `key` is missing', () => {
          expect(storedObject.get('SO')).toBeNull();
        });

        it('and returns the JSON.parse-d value', () => {
          const test = { a: 1, b: 1 };
          localStorage.setItem('SO', JSON.stringify(test));
          expect(storedObject.get('SO')).toEqual(test);
        });

        it('and returns `null` if the value is not JSON.parse-able', () => {
          const test = `{ a: 1, b: }`;
          localStorage.setItem('SO', test);
          expect(storedObject.get('SO')).toBeNull();
        });

        it('and logs a warning if the value is not JSON.parse-able', () => {
          const spy = spyOn(console, 'warn');
          const test = `{ a: 1, b: }`;
          localStorage.setItem('SO', test);
          storedObject.get('SO');
          expect(spy.calls.mostRecent().args[0]).toBe(`Could not parse SO from localStorage`);
        });
      });

      describe('that retrieves from sessionStorage', () => {
        beforeEach(() => {
          sessionStorage.removeItem('SO');
        });

        afterAll(() => {
          sessionStorage.clear();
        });

        it('and returns `null` if the `key` is missing', () => {
          expect(storedObject.get('SO', true)).toBeNull();
        });

        it('and returns the JSON.parse-d value', () => {
          const test = { a: 1, b: 1 };
          sessionStorage.setItem('SO', JSON.stringify(test));
          expect(storedObject.get('SO', true)).toEqual(test);
        });

        it('and returns `null` if the value is not JSON.parse-able', () => {
          const test = `{ a: 1, b: }`;
          sessionStorage.setItem('SO', test);
          expect(storedObject.get('SO', true)).toBeNull();
        });

        it('and logs a warning if the value is not JSON.parse-able', () => {
          const spy = spyOn(console, 'warn');
          const test = `{ a: 1, b: }`;
          sessionStorage.setItem('SO', test);
          storedObject.get('SO', true);
          expect(spy.calls.mostRecent().args[0]).toBe(`Could not parse SO from sessionStorage`);
        });
      });
    });

    describe('set', () => {
      afterAll(() => {
        localStorage.clear();
        sessionStorage.clear();
      });

      it('that saves JSON.stringify-ed `value` to localStorage', () => {
        const value = { a: 1, b: 1 };
        const test = JSON.stringify(value);
        localStorage.removeItem('SO');
        storedObject.set('SO', value);
        expect(localStorage.getItem('SO')).toBe(test);
      });

      it('that saves JSON.stringify-ed `value` to sessionStorage', () => {
        const value = { a: 1, b: 1 };
        const test = JSON.stringify(value);
        sessionStorage.removeItem('SO');
        storedObject.set('SO', value, true);
        expect(sessionStorage.getItem('SO')).toBe(test);
      });
    });
  });
});
