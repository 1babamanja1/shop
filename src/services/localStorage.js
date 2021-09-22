export function saveToLocalStorage(key, currentState) {
  const serializesState = JSON.stringify(currentState);
  localStorage.setItem(key, serializesState);
}
export function getFromLocalStorage(key) {
  const serializesState = localStorage.getItem(key);
  if (serializesState === null) return undefined;
  return JSON.parse(serializesState);
}
