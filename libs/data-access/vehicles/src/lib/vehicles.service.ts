import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';
import { Vehicle } from './vehicles.model';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  // @todo Use environment variables.
  private readonly endpoint =
    'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles';
  private readonly http = inject(HttpClient);

  // Store
  private readonly _vehicles$ = new BehaviorSubject<Vehicle[] | null>(null);
  readonly vehicles$ = this._vehicles$.asObservable();

  /**
   * Fetch vehicle data and return observable of vehicle data.
   * This method also updates the store.
   *
   * @return observable of array of vehicles.
   */
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.endpoint).pipe(
      mergeMap((vehicles) => {
        return combineLatest(
          // Create an array of observables, one for each vehicle. Each observable
          // will get the vehicle detail and merge the detail with the vehicle object.
          vehicles.map((vehicle) =>
            this.http.get(`${this.endpoint}/${vehicle.id}`).pipe(
              catchError((error) => {
                // @todo Log this error with the error service.
                // this.errorService.log(error);
                return of(null);
              }),
              map((vehicleDetail) => {
                // If vehicle has no details, maybe due to API request failing, then return null.
                return vehicleDetail ? { ...vehicle, ...vehicleDetail } : null;
              })
            )
          )
        );
      }),
      // Filter out incomplete vehicles.
      map((vehicles) => vehicles.filter((vehicle) => !!vehicle) as Vehicle[]),
      // Update the state.
      tap((vehicles) => this._vehicles$.next(vehicles))
    );
  }
}
