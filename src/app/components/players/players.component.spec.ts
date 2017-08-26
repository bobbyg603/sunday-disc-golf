import { TestBed, async } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayersComponent
      ],
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
});
