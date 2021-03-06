import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class StorageService {

  constructor(private cookieService: CookieService) {
  }
  setObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  updateItem(key, property, value) {
    const obj = this.getObject(key);
    obj[property] = value;
    this.setObject(key, obj);
  }

  removeAllStorage() {
    this.cookieService.removeAll();
    localStorage.clear();
  }

  getCurrentUserId() {
    return this.getObject(environment.authKey).userId;
  }
}
