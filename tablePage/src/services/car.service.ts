import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleModel} from "../models/VehicleModel";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  public getVehicleList(): Observable<VehicleModel[]>{
    return this.http.get<VehicleModel[]>("assets/vehicleList.json").pipe(map(resp => {
      return resp.map(item => {
        return item;
      });
    }));
  }

}
