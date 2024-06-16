export enum Drivetrain {
  AWD,
  RDW,
}

export interface Vehicle {
  id: string;
  name: string;
  modelYear: string;
  apiUrl: string;
  media: VehicleMedia[];
  description: string;
  price: string;
}

export interface VehicleMeta {
  passengers: number;
  drivetrain: Drivetrain[];
  bodystyle: string;
  emissions: VehicleEmissions;
}

export interface VehicleEmissions {
  template: string;
  value: number;
}

export interface VehicleMedia {
  name: string;
  url: string; // I don't like that the BE knows about the structure of the FE asset location. Too much coupling.
}
