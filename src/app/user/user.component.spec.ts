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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#clicked() should toggle #isOn', () => {
    // const comp = new UserComponent();
    expect(component.isOn).toBe(false, 'off at first');
    component.clicked();
    expect(component.isOn).toBe(true, 'on after click');
    component.clicked();
    expect(component.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i, 'off at first');
    component.clicked();
    expect(component.message).toMatch(/is on/i, 'on after clicked');
  });


  it('should have <p> with ".......text"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p :any= bannerElement.querySelector('p');
    expect(p.textContent).toEqual('Nullam quis risus eget urna mollis ornare .');
  });
});

///////////////////////////



describe('UserComponent service', () => {
  let comp: UserComponent;
  let userService: UserserviceService;
  class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User'};
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        UserComponent,
        { provide: UserserviceService, useClass: MockUserService }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.inject(UserComponent);
    userService = TestBed.inject(UserserviceService);
  });

  it('should not have welcome message after construction', () => {
    expect(comp.welcome).toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.welcome).toContain(userService.user.name);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;
    comp.ngOnInit();
    expect(comp.welcome).not.toContain(userService.user.name);
    expect(comp.welcome).toContain('log in');
  });


})


//////////////////////////////////////////////

///test pipe

describe("",()=>{
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
  });
  it('should convert hero name to Title Case', () => {

    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    const nameDisplay: HTMLElement = hostElement.querySelector('#testspan');

    // simulate user entering a new name into the input box
    nameInput.value = 'hi mona';

    // Dispatch a DOM event so that Angular learns of input value change.
    // In older browsers, such as IE, you might need a CustomEvent instead. See
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
    nameInput.dispatchEvent(new Event('input'));

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(nameDisplay.textContent).toBe('Hi Mona');
  });
})


