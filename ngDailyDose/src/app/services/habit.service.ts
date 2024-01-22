import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Habit } from '../models/habit';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  private url = environment.baseUrl + 'api/habits';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Habit[]> {
    return this.http.get<Habit[]>(this.url).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('HabitService.index(): error retrieving habit: ' + err)
        );
      })
    );
  }









}
