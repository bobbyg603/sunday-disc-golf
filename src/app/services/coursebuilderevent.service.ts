import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Hole } from '../entities/hole.entity';
import { Address } from '../entities/address.entity';

@Injectable()
export class CourseBuilderEventService {

  private courseBuilderEventSubject: Subject<CourseBuilderEvent> = new Subject<CourseBuilderEvent>();

  constructor() { }

  getObservable() {
    return this.courseBuilderEventSubject.asObservable();
  }

  setName(name: string) {
    this.courseBuilderEventSubject.next(new CourseBuilderEvent(CourseBuilderEventType.SetName, name));
  }

  setAddress(address: Address) {
    this.courseBuilderEventSubject.next(new CourseBuilderEvent(CourseBuilderEventType.SetAddress, address));
  }

  addHole(hole: Hole) {
    this.courseBuilderEventSubject.next(new CourseBuilderEvent(CourseBuilderEventType.AddHole, hole));
  }

  done(lastHole: Hole) {
    this.courseBuilderEventSubject.next(new CourseBuilderEvent(CourseBuilderEventType.Done, lastHole));
  }
}

export class CourseBuilderEvent {
  constructor(public type: CourseBuilderEventType, public data: Object) {}
}

export enum CourseBuilderEventType {
  SetName,
  SetAddress,
  AddHole,
  Done
}
