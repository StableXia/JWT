const __STORAGE__KEY__TOKEN = '__storage__key__token';

export function setStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getStorage(key: string) {
  return localStorage.getItem(key);
}

export function setToken(value: string) {
  setStorage(__STORAGE__KEY__TOKEN, value);
}

export function getToken() {
  return getStorage(__STORAGE__KEY__TOKEN);
}
