export const STORAGE_KEYS = {
  TOKEN: "token",
};

export const storage = {
  getToken: () => localStorage.getItem(STORAGE_KEYS.TOKEN),
  setToken: (authToken) => localStorage.setItem(STORAGE_KEYS.TOKEN, authToken),
  removeToken: () => localStorage.removeItem(STORAGE_KEYS.TOKEN),
};
