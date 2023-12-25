function useLocalStorage() {
  const getLocalStorage = (i: string) => localStorage.getItem(i);
  const setLocalStorage = (i: string, v: string) => localStorage.setItem(i, v);
  return { get: getLocalStorage, set: setLocalStorage };
}

export default useLocalStorage;
