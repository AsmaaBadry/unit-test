import { TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';
import {
   waitForAsync
} from '@angular/core/testing'

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('userService', () => {

  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserserviceService] });
    service = TestBed.inject(UserserviceService);
  });

  it('should use ValueService', () => {
    expect(service.getValue()).toBe('real value');
  });



  it('test should wait for ValueService.getPromiseValue', waitForAsync(() => {
    service.getPromiseValue().then(
      value => expect(value).toBe('promise value')
    );
  }))
})
