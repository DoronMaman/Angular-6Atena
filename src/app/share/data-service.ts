import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './user.modal';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:1111';

  getConfig(): Observable<Users> {
    return this.http.get<Users>(this.configUrl);
  }
}