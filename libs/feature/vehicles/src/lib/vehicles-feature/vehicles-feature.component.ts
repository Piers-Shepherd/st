import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesService } from '@st/data-access/vehicles';
import { VehicleCardComponent } from '@st/ui/vehicle-card';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, VehicleCardComponent],
  templateUrl: './vehicles-feature.component.html',
  styleUrl: './vehicles-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesFeatureComponent implements OnInit, OnDestroy {
  private vehicleService = inject(VehiclesService);

  // Vehicles reference.
  vehicles$ = this.vehicleService.vehicles$;

  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.vehicleService.getVehicles().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
