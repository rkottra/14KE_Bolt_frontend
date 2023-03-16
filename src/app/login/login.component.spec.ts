import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '../services/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Van-e Login feliratú gomb', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect((compiled.querySelector('fieldset input[type=button]') as HTMLInputElement).value).toEqual('Login');
  });

 /* it('Az email értéke megyegezik-e a kezdőértékkel', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const component = fixture.componentInstance;
    
    
    component.email = "kottra.richard@jedlik.eu";
    fixture.detectChanges();
    console.log((compiled.querySelector('#email') as HTMLInputElement).value);
    
    expect((compiled.querySelector('#email') as HTMLInputElement).value).toEqual(component.email);
  });*/
});
