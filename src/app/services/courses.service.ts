import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';
import { Hole } from '../entities/hole.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class CoursesService {

  readonly COURSES_URL = environment.coursesUrl;

  constructor(private httpClient: HttpClient) { }

  create(course: Course): Observable<Object> {
    const payload = {
      name: course.name,
      holes: course.holes,
      street: course.street,
      city: course.city,
      state: course.state,
      zip: course.zip
    }
    return this.httpClient.post(this.COURSES_URL, payload);
  }

  get(courseName: string): Observable<Object>  {
    return this.httpClient.get(this.COURSES_URL + "/" + courseName);
  }

  list(): Observable<Object>  {
    return this.httpClient.get(this.COURSES_URL);
  }
}
