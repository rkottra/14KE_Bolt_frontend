import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '14KE_Bolt_frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('14KE_Bolt_frontend');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const seged = fixture.debugElement.query(
      By.css('h1')
    );
    console.log(seged);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect((seged.nativeElement as HTMLHeadingElement).innerText).toContain('Bolt');
  });*/
});
