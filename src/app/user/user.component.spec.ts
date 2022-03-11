import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserserviceService } from '../services/userservice.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de =fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test that when the clicked function in ts file called , the value of (isOn) variable will be true and test that when the clicked function in ts file called again , the value of (isOn) variable will be false', () => {
    const btn = de.query(By.css('#btn1'));
    btn.triggerEventHandler('click',{});
    expect(component.isOn).toEqual(true);
    btn.triggerEventHandler('click',{})
    fixture.detectChanges();
    expect(component.isOn).toEqual(false);
  });





});

///////////////////////////



