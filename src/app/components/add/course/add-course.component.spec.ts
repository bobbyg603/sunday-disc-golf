import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '../../../services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormArray, FormGroup, FormControl } from '@angular/forms';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCourseComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        CoursesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error if name is invalid', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#name-input').textContent).toContain('Name is required');
  });

  it('should display an error if par value is not a positive number between 2 and 7', () => {
    component.newCourseForm.controls["name"].setValue("test");
    component.next();
    component.next();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#par-input').textContent).toContain('Invalid par value');
  });

  it('should not display an error if par value is not a positive number between 2 and 7', () => {
    component.newCourseForm.controls["name"].setValue("test");
    component.next();
    component.next();
    const holesFormArray = component.newCourseForm.controls["holes"] as FormArray;
    const holeFormGroup = holesFormArray.controls[0] as FormGroup;
    const holeParControl = holeFormGroup.controls["par"] as FormControl;
    holeParControl.setValue("3");
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#par-input').textContent).not.toContain('Invalid par value');
  });

  it('should display an error if distance value is not a positive number', () => {
    component.newCourseForm.controls["name"].setValue("test");
    component.next();
    component.next();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#distance-input').textContent).toContain('Invalid distance value');
  });

  it('should not display an error if distance value is a positive number', () => {
    component.newCourseForm.controls["name"].setValue("test");
    component.next();
    component.next();
    const holesFormArray = component.newCourseForm.controls["holes"] as FormArray;
    const holeFormGroup = holesFormArray.controls[0] as FormGroup;
    const holeDistanceControl = holeFormGroup.controls["distance"] as FormControl;
    holeDistanceControl.setValue("333");
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#distance-input').textContent).not.toContain('Invalid distance value');
  });

  it('should display an error if elevation value does not contain plus or minus sign', () => {
    component.newCourseForm.controls["name"].setValue("test");
    component.next();
    component.next();
    fixture.detectChanges();
    const holesFormArray = component.newCourseForm.controls["holes"] as FormArray;
    const holeFormGroup = holesFormArray.controls[0] as FormGroup;
    const holeElevationControl = holeFormGroup.controls["elevation"] as FormControl;
    holeElevationControl.setValue("foo");
    holeElevationControl.markAsDirty();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#elevation-input').textContent).toContain('Invalid elevation value');
  });

  it('should not display the next button if the form is invalid', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input-container').textContent).not.toContain('Next');
  });

  it('should display the next button if the form is valid', () => {
    component.newCourseForm.controls["name"].setValue("test");
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input-container').textContent).toContain('Next');
  });

  it('should not display the done button if the form is invalid', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input-container').textContent).not.toContain('Next');
  });

  it('should display the done button if the form is valid and the current hole is 9 or 18', () => {
    component.newCourseForm.controls["name"].setValue("test");
    component.next();
    component.next();
    const holesFormArray = component.newCourseForm.controls["holes"] as FormArray;
    setHoleValues(component, 9);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input-container').textContent).toContain('Done');
  });

  function setHoleValues(component: AddCourseComponent, numberOfHoles: number) {
    const holesFormArray = component.newCourseForm.controls["holes"] as FormArray;
    for(let i = 0; i < numberOfHoles; i++) {
      const holeFormGroup = holesFormArray.controls[i] as FormGroup;
      const holeParControl = holeFormGroup.controls["par"] as FormControl;
      const holeDistanceControl = holeFormGroup.controls["distance"] as FormControl;
      holeParControl.setValue("3");
      holeDistanceControl.setValue("333");
      fixture.detectChanges();
      component.next();
    }
  }
});
