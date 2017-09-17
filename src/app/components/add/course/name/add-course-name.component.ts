import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { Address } from '../../../../entities/address.entity';

@Component({
  selector: 'add-course-name',
  templateUrl: './add-course-name.component.html',
  styleUrls: ['./add-course-name.component.css'],
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
export class AddCourseNameComponent {

  currentError: string = "";
  
  constructor(private courseBuilderEventService: CourseBuilderEventService) { }
  
    setName(name: string) {
      if (name == "") {
        this.currentError = "Invalid name";
        return;
      }
      this.courseBuilderEventService.setName(name);
    }
}
