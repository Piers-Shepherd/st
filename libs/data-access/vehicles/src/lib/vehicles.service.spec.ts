import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { VehiclesService } from './vehicles.service';
import { HttpClient } from '@angular/common/http';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(VehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
