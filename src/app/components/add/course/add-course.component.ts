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

  newCourseForm: FormGroup;

  nameInputVisible = true;
  addressInputVisible = false;

  constructor(private formBuilder: FormBuilder, private coursesService: CoursesService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newCourseForm = this.formBuilder.group({
      name: ["", Validators.required],
      address: this.formBuilder.group(new Address()),
      holes: this.formBuilder.array(new Array<Hole>())
    })
  }


  holeInputVisible(index) {
    return this.holes.length - 1 == index;
  }

  next() {
    if(this.nameInputVisible) {
      this.nameInputVisible = false;
      this.addressInputVisible = true;
    } else if(this.addressInputVisible) {
      this.addressInputVisible = false;
      this.addHole();
    } else {
      this.addHole();
    }
  }

  addHole() {
    const holeNumber = this.holes.length + 1;
    this.holes.push(this.formBuilder.group(new Hole(holeNumber)));
  }

  get holes(): FormArray {
    return this.newCourseForm.get("holes") as FormArray;
  }

  setHoles(holes: Array<Hole>) {
    const holesFormGroups = holes.map(hole => this.formBuilder.group(hole));
    const holesFormArray = this.formBuilder.group(holesFormGroups);
    this.newCourseForm.setControl("holes", holesFormArray); 
  }
}
