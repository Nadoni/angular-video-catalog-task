import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'UserToken';
  public isLoggedUser = false;

  private existedUser = {email: 'admin@g.com', password: '123'};

  constructor() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.existedUser));
  }

  login(user) {
    return this.isLoggedIn(user);
    // localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem(this.storageKey);
    this.isLoggedUser = false;
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  isLoggedIn(user) {
    const data = this.getUser();
    return data.email === user.email ? (this.isLoggedUser = true) && true : false;
  }
}
