import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../../../services/car.service";
import {VehicleModel} from "../../../../../models/VehicleModel";

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {
  public vehicleList: VehicleModel[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    let orderedVehicleIds: any[] = [];
    const stringIds = localStorage.getItem('orderedVehicleIds');
    if (stringIds) {
      orderedVehicleIds = JSON.parse(stringIds);
    }
    if (!orderedVehicleIds.length) {
      return;
    }
    this.carService.getVehicleList().subscribe(data => {
      if (!data.length) {
        return;
      }
      data.forEach(vehicle => {
        const existingId = orderedVehicleIds.find(id => id == vehicle.id)
        if (existingId) {
          this.vehicleList.push(vehicle);
        }
      })
    })
  }

}
