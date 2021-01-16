import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { UserserviceService } from './userservice.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



////////////////////////////////////////////

describe('MasterService', () => {
  let masterService: MasterService;
  let UserserviceServiceSpy: jasmine.SpyObj<UserserviceService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserserviceService', ['getValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        MasterService,
        { provide: UserserviceService, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    masterService = TestBed.inject(MasterService);
    UserserviceServiceSpy = TestBed.inject(UserserviceService) as jasmine.SpyObj<UserserviceService>;
  });

  it('#getValue should return stubbed value from a spy', () => {
    const stubValue = 'stub value';
    UserserviceServiceSpy.getValue.and.returnValue(stubValue);

    expect(masterService.getValue())
      .toBe(stubValue, 'service returned stub value');
    expect(UserserviceServiceSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');
    expect(UserserviceServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });
});
