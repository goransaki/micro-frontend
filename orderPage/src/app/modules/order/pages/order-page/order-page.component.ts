import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../../../services/car.service";
import {VehicleModel} from "../../../../../models/VehicleModel";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
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

  public declineOrder(id: string): void {
    let orderedVehicleIds: any[] = [];
    const stringIds = localStorage.getItem('orderedVehicleIds');
    if (stringIds) {
      orderedVehicleIds = JSON.parse(stringIds);
    }
    this.removeVehicleFromOrders(orderedVehicleIds, id);
  }

  private removeVehicleFromOrders(orderedVehicleIds: any[], id: string): void {
    orderedVehicleIds.forEach((element, index) => {
      if (element == id) {
        orderedVehicleIds.splice(index, 1);
      }
    });
    this.vehicleList.forEach((element, index) => {
      if (element.id == id) {
        this.vehicleList.splice(index, 1);
      }
    });
    localStorage.setItem('orderedVehicleIds', JSON.stringify(orderedVehicleIds));
  }
}
