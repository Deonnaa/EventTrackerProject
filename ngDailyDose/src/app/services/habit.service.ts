import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  private url = environment.baseUrl + 'api/habits';

  constructor(
    private http: HttpClient
  ) { }
}
