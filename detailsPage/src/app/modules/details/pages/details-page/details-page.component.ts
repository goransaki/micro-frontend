import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../../../../services/car.service";
import {VehicleModel} from "../../../../../models/VehicleModel";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public vehicleList: VehicleModel[] = [];
  public vehicle: VehicleModel | undefined;

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
    orderedVehicleIds.push(this.vehicle?.id);
    localStorage.setItem('orderedVehicleIds', JSON.stringify(orderedVehicleIds));
    this.router.navigate(['/order']);
  }
}
