import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url: "";
  constructor(private http: HttpClient) {
  }
  addFriend(firstname: string, lastname: string, email: string, phoneNumber: number, languages: string) {
    return this.http.post(url, data);
  }
}
