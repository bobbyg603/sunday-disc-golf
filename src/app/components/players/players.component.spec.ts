import { TestBed, async } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { PlayersService } from '../../services/players.service';

describe('PlayersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayersComponent
      ],
      providers: [
        PlayersService
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Players'`, async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Players');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Players');
  }));

  it('should display an error if addPlayer is called without a username', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    app.addPlayer("", "", "", "", "", "", "");
    fixture.detectChanges();
    expect(compiled.querySelector('#currentError').textContent).toContain('Please enter a username!');
  }));

  it('should display an error if addPlayer is called without a password', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    app.addPlayer("bobbyg603", "", "", "", "", "", "");
    fixture.detectChanges();
    expect(compiled.querySelector('#currentError').textContent).toContain('Please enter a password!');
  }));

  it('should display an error if removePlayer is called without a name', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const username = "bobbyg603";
    app.removePlayer(username);
    fixture.detectChanges();
    expect(compiled.querySelector('#currentError').textContent).toContain(username + " doesn't exist!");
  }));
});
