import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { Hole } from '../../../../entities/hole.entity';

@Component({
  selector: 'add-course-hole',
  templateUrl: './add-course-hole.component.html',
  styleUrls: ['./add-course-hole.component.css'],
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
export class AddCourseHoleComponent implements OnInit {

  holeNumber: number;
  currentError: string = "";
  private subscription: any;

  constructor(private route: ActivatedRoute, private courseBuilderEventService: CourseBuilderEventService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.holeNumber = +params['number'];
      if (this.holeNumber > 18) {
        this.holeNumber = 18;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addHole(par: string, distance: string, elevation: string, description: string) {
    const parNumber = Number(par);
    const distanceNumber = Number(distance);
    if(!this.parIsValid(parNumber)) {
      this.currentError = "Invalid par value";
      return;
    }
    this.courseBuilderEventService.addHole(new Hole(this.holeNumber, parNumber, distanceNumber, elevation, description));
  }

  done(par: string, distance: string, elevation: string, description: string) {
    const parNumber = Number(par);
    const distanceNumber = Number(distance);
    if(!this.parIsValid(parNumber)) {
      this.currentError = "Invalid par value";
      return;
    }
    this.courseBuilderEventService.done(new Hole(this.holeNumber, parNumber, distanceNumber, elevation, description));
  }

  parIsValid(parNumber: number) {
    return parNumber && parNumber < 8 && parNumber > 0;
  }
}
