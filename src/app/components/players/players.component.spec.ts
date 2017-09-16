import { TestBed, async } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { PlayersService } from '../../services/players.service';
import { HttpClientModule } from '@angular/common/http';
import { Player } from '../../entities/player.entity';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

class MockPlayersService extends PlayersService {
  
  mockPlayersSubject = new Subject<Object>();
  
  players = [];

  create(player: Player): Observable<Object> {
    this.players.push(player);
    return Observable.of(player);
  }

  list(): Observable<Object> {
    return Observable.of(this.players);
  }
}

describe('PlayersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        PlayersComponent
      ],
      providers: [
        { provide: PlayersService, useClass: MockPlayersService }
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

  it('should display an error if updatePlayer is called without a username', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    app.updatePlayer("", "", "", "", "", "", "");
    fixture.detectChanges();
    expect(compiled.querySelector('#currentError').textContent).toContain('Please enter a username!');
  }));

  it('should display an error if addPlayer is called without a password', async(() => {
    const fixture = TestBed.createComponent(PlayersComponent);
    const playersService = fixture.debugElement.injector.get(PlayersService);
    const testPlayer = new Player("bobbyg603", "password");
    playersService.create(testPlayer);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    app.updatePlayer(testPlayer.username, "", "", "", "", "", "");
    fixture.detectChanges();
    expect(compiled.querySelector('#currentError').textContent).toContain('Please enter a password!');
  }));

  it('should display an error if removePlayer is called with a username that does not exist', async(() => {
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
