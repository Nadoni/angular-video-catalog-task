import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'UserToken';
  constructor() { }

  login() {
    localStorage.setItem(this.storageKey, 'token');
  }
}
