import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './signup.component';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from '../../services/players.service';

describe('SignupComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SignUpComponent],
      providers: [
        AuthenticationService,
        PlayersService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
