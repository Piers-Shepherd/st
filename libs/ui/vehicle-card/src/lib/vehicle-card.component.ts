import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '@st/data-access/vehicles';

@Component({
  selector: 'lib-vehicle-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleCardComponent {
  @Input({ required: true }) vehicle!: Vehicle;
}
