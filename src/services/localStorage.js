export function saveToLocalStorage(key, currentState) {
  const serializesState = JSON.stringify(currentState);
  localStorage.setItem(key, serializesState);
}
export function getFromLocalStorage(key) {
  const serializesState = localStorage.getItem(key);
  if (serializesState === null) return undefined;
  return JSON.parse(serializesState);
}

export function saveToSessionStorage(key, currentState) {
  const serializesState = JSON.stringify(currentState);
  sessionStorage.setItem(key, serializesState);
}
export function getFromSessionStorage(key) {
  const serializesState = sessionStorage.getItem(key);
  if (serializesState === null) return undefined;
  return JSON.parse(serializesState);
}

export function saveToCookie(key, value) {
  document.cookie = JSON.stringify(`__${key}:${value}__`);
}

export function getFromCookie(key) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookie = decodedCookie.split('__').find((item) => item.includes(`${key}:`));
  return cookie?.slice(key?.length + 1);
}
