import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleModel} from "../models/VehicleModel";
import {Observable} from "rxjs";
import * as _ from "lodash";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

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
