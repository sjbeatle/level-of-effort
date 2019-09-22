export const storedObject = {
  get: (key: string, isSession?: boolean) => {
    let value: any;
    const storage = isSession ? 'sessionStorage' : 'localStorage';

    if (Storage) {
      value = window[storage].getItem(key);
    }

    if (value === null) {
      return value;
    }

    try {
      value = JSON.parse(value);
      return value;
    } catch (e) {
      console.warn(`Could not parse ${key} from ${storage}`, e);
    }

    return null;
  },

  set: (key: string, value: any, isSession?: boolean) => {
    const storage = isSession ? 'sessionStorage' : 'localStorage';
    const obj = JSON.stringify(value);

    if (Storage) {
      window[storage].setItem(key, obj);
    }
  },
};
