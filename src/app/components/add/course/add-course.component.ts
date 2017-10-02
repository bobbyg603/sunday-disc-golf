import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Hole } from '../../../entities/hole.entity';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../entities/course.entity';
import { Address } from '../../../entities/address.entity';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']

})
export class AddCourseComponent implements OnInit {

  title = "New Course";
  currentError = "";

  newCourseForm: FormGroup;

  nameInputVisible = true;
  addressInputVisible = false;

  readonly PAR_NUMBER_PATTERN = "[2-7]";
  readonly ANY_NUMBER_PATTERN = "^[0-9]+$";
  readonly PLUS_OR_MINUS_NUMBER_PATTERN = "^[\+\-][0-9]+$";

  constructor(private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newCourseForm = this.formBuilder.group({
      name: ["", Validators.required],
      address: this.formBuilder.group(new Address()),
      holes: this.formBuilder.array([])
    })
  }

  holeInputVisible(index) {
    return this.holes.length - 1 == index;
  }

  next() {
    if (this.newCourseForm.valid) {
      if (this.nameInputVisible) {
        this.nameInputVisible = false;
        this.addressInputVisible = true;
      } else if (this.addressInputVisible) {
        this.addressInputVisible = false;
        this.addHole();
      } else {
        this.addHole();
      }
    }
  }

  done() {
    const courseFormAny = <any>this.newCourseForm.value;
    const name = courseFormAny.name;
    const holes = courseFormAny.holes.map(hole => new Object({
      number: +hole.number,
      par: +hole.par,
      distance: +hole.distance,
      elevation: hole.elevation,
      description: hole.description
    }));
    const street = courseFormAny.address.street;
    const city = courseFormAny.address.city;
    const state = courseFormAny.address.state;
    const zip = courseFormAny.address.zip;
    const newCourse = new Course(name, holes, street, city, state, zip);
    this.coursesService.create(newCourse).subscribe(response => {
      console.log(response);
      this.router.navigate(["/courses"]);
    });
  }

  addHole() {
    this.holes.push(this.formBuilder.group({
      number: this.holes.length + 1,
      par: ['', Validators.compose([Validators.required, Validators.pattern(this.PAR_NUMBER_PATTERN)])],
      distance: ['', Validators.compose([Validators.required, Validators.pattern(this.ANY_NUMBER_PATTERN)])],
      elevation: ['', Validators.pattern(this.PLUS_OR_MINUS_NUMBER_PATTERN)],
      description: ['', Validators.nullValidator]
    }));
  }

  get holes(): FormArray {
    return this.newCourseForm.get("holes") as FormArray;
  }

  get name(): FormControl {
    return this.newCourseForm.get("name") as FormControl;
  }
}
