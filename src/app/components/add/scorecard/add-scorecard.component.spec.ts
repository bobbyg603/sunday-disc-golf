import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScorecardComponent } from './add-scorecard.component';

describe('AddScorecardComponent', () => {
  let component: AddScorecardComponent;
  let fixture: ComponentFixture<AddScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
