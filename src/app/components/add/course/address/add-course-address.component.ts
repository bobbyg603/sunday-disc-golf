import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { Address } from '../../../../entities/address.entity';

@Component({
  selector: 'add-course-address',
  templateUrl: './add-course-address.component.html',
  styleUrls: ['./add-course-address.component.css'],
  animations: [
    trigger('stepAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AddCourseAddressComponent {

  currentError: string = "";

  constructor(private courseBuilderEventService: CourseBuilderEventService) { }

  setAddress(street: string, city: string, state: string, zip: string) {
    this.courseBuilderEventService.setAddress(new Address(street, city, state, zip));
  }
}
