import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { VehiclesService } from './vehicles.service';
import { HttpClient } from '@angular/common/http';

describe('VehiclesService', () => {
  /**
   * @todo
   * Test to ensure public methods do what they're supposed to.
   * Test to ensure state is maintained and updated.
   */
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
