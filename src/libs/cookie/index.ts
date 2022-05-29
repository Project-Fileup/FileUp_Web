import jsCookie from 'js-cookie';

const cookie = {
  get: (key: string): string | undefined => {
    return jsCookie.get(key);
  },

  set: (key: string, value: string): void => {
    jsCookie.set(key, value);
  },

  remove: (key: string): void => {
    jsCookie.remove(key);
  },
}

export default cookie;