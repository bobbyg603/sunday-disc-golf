import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error if username is empty', () => {
    component.login("", "password");
    expect(component.currentError).toEqual("Please enter a username");
  });

  it('should display an error if password is empty', () => {
    component.login("username", "");
    expect(component.currentError).toEqual("Please enter a password");
  });

  it('should call loginService if username and password are valid', () => {
    const testUsername = "bobbyg603";
    const testPassword = "password123";
    const loginService = fixture.debugElement.injector.get(LoginService);
    loginService.login = (username, password) => {
      expect(username).toEqual(testUsername);
      expect(password).toEqual(testPassword);
    };
    component.login(testUsername, testPassword);
  });
});
