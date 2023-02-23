import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../../../../services/car.service";
import {VehicleModel} from "../../../../../models/VehicleModel";

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  public vehicleList: VehicleModel[] = [];
  public vehicle: any;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) {
  }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.getVehicleList().subscribe(data => {
      this.vehicleList = data;
      this.vehicle = this.vehicleList.find(value => value.id == id);
    })
  }

  public order(): void {
    let orderedVehicleIds = [];
    const stringIds = localStorage.getItem('orderedVehicleIds');
    if (stringIds) {
      orderedVehicleIds = JSON.parse(stringIds);
    }
    orderedVehicleIds.push(this.vehicle.id);
    localStorage.setItem('orderedVehicleIds', JSON.stringify(orderedVehicleIds));
    this.router.navigate(['/static']);
  }
}
