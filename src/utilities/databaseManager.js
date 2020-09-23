// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const data = localStorage.getItem("cart") || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (key, count) => {
    const currentCart = getDatabaseCart();
    if(currentCart[key]) currentCart[key] += count;
    else currentCart[key] = count;
    localStorage.setItem("cart", JSON.stringify(currentCart));
}

const removeFromDatabaseCart = key => {
    const currentCart = getDatabaseCart();
    delete currentCart[key];
    localStorage.setItem("cart", JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem("cart");
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill