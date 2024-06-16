import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleCardComponent } from './vehicle-card.component';

describe('VehicleCardComponent', () => {
  let component: VehicleCardComponent;
  let fixture: ComponentFixture<VehicleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleCardComponent);
    component = fixture.componentInstance;
    component.vehicle = {
      id: 'xe',
      name: 'Jaguar XE',
      description: 'A cool car.',
      price: 'from £30,333',
      media: [
        {
          name: '1',
          url: '/abc/123.jpg',
        },
        {
          name: '2',
          url: '/abc/123.jpg',
        },
      ],
      modelYear: '2024',
      apiUrl: '/xe',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
