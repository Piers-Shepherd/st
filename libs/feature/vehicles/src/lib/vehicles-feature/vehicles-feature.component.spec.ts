import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { VehiclesFeatureComponent } from './vehicles-feature.component';
import { Vehicle, VehiclesService } from '@st/data-access/vehicles';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

const vehicles = [
  {
    id: 'xe',
    name: 'JAGUAR XE',
    modelYear: 'k17',
    apiUrl: '/api/vehicles/xe',
    media: [
      { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
      { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' },
    ],
    description:
      'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
    price: '£30,000',
    meta: {
      passengers: 5,
      drivetrain: ['AWD', 'RWD'],
      bodystyles: ['saloon'],
      emissions: { template: 'CO2 Emissions $value g/km', value: 99 },
    },
  },
  {
    id: 'xf',
    name: 'JAGUAR XF',
    modelYear: 'k17',
    apiUrl: '/api/vehicles/xf',
    media: [
      { name: 'vehicle', url: '/images/16x9/xf_k17.jpg' },
      { name: 'vehicle', url: '/images/1x1/xf_k17.jpg' },
    ],
    description:
      'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
    price: '',
    meta: {
      passengers: 5,
      drivetrain: ['AWD', 'RWD'],
      bodystyles: ['saloon'],
      emissions: { template: 'CO2 Emissions $value g/km', value: 104 },
    },
  },
];

const vehiclesServiceMock = {
  vehicles$: new BehaviorSubject<Vehicle[] | null>(null),
  getVehicles(): Observable<Vehicle[]> {
    return of(vehicles).pipe(tap((vehicles) => this.vehicles$.next(vehicles)));
  },
};

describe('VehiclesFeatureComponent', () => {
  let component: VehiclesFeatureComponent;
  let fixture: ComponentFixture<VehiclesFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesFeatureComponent],
      providers: [
        {
          provide: VehiclesService,
          useValue: vehiclesServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and retrieve vehicles', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    tick();
    component.vehicles$.subscribe((vehicles) => {
      expect(vehicles).toEqual(vehicles);
    });
  }));
});
