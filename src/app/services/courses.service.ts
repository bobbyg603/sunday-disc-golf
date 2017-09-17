import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';
import { Hole } from '../entities/hole.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  readonly COURSES_URL = "https://d9j2m4xo32.execute-api.us-east-1.amazonaws.com/dev";

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
    return this.httpClient.post(this.COURSES_URL + "/courses", payload);
  }

  get(courseName: string): Observable<Object>  {
    return this.httpClient.get(this.COURSES_URL + "/courses" + "/" + courseName);
  }

  list(): Observable<Object>  {
    return this.httpClient.get(this.COURSES_URL + "/courses");
  }
}
