// Some browser doesn't support localStorage so i use try/catch wrapper

const saveStore = store => {
  try {
    console.log(store)
    localStorage.store = JSON.stringify(store);
  } catch {
    console.log("The browser doesn't support save function.");
  }
};

const restoreStore = store => {
  try {
    return localStorage.store ? JSON.parse(localStorage.store) : false;
  } catch {
    return false;
  }
};

export { saveStore, restoreStore };
