import Cookies from 'js-cookie'

// useClass: Cookie/LocalStorageStore
export default class {
  constructor(useClass) {
    this.tokenKey = "bearToken";
    this.useClass = useClass;
  }

  setToken(token) {
    switch (this.useClass) {
      case 'Cookie':
        return Cookies.set(this.tokenKey, token);
        break;
      case 'LocalStorageStore':
        return localStorage.setItem(this.tokenKey, token);
        break;
      default:
        return Cookies.set(this.tokenKey, token);
        break;
    }
  }
  getToken() {
    let token;
    switch (this.useClass) {
      case 'Cookie':
        token = Cookies.get(this.tokenKey);
        break;
      case 'LocalStorageStore':
        token = localStorage.getItem(this.tokenKey);
        break;
      default:
        token = Cookies.get(this.tokenKey);
        break;
    }
    if (typeof(token) == "undefined") {
      token=null;
    }
    return token;
  }
  removeToken() {
    switch (this.useClass) {
      case 'Cookie':
        return Cookies.remove(this.tokenKey);
        break;
      case 'LocalStorageStore':
        return localStorage.removeItem(this.tokenKey);
        break;
      default:
        return Cookies.remove(this.tokenKey);
        break;
    }

  }
}
