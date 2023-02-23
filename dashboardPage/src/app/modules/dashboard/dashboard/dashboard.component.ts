import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {VehicleService} from "../../../../services/vehicle.service";
import {VehicleModel} from "../../../../models/VehicleModel";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public defaultVehicleList: VehicleModel[] = [];
  public vehicleList: VehicleModel[] = [];

  public form: FormGroup;
  public manufacturerList: any[] = [];

  constructor(private fb: FormBuilder, private vehicleService: VehicleService) {
    this.form = fb.group({
      selectedManufacturers: new FormArray([])
    });
  }

  public ngOnInit(): void {
    const orderedVehicleId =  localStorage.getItem('orderedVehicleId');
    if(orderedVehicleId){

    }
    this.vehicleService.getVehicleList().subscribe(data => {
      this.defaultVehicleList = data;
      if(!data){
        return;
      }
      data.forEach(value => {
        if (!this.manufacturerList.includes(value.make)) {
          this.manufacturerList.push(value.make);
        }
      })
      this.filter();
    });
  }

  public onCheckboxChange(event: any) {
    const selectedManufacturers = (this.form.controls['selectedManufacturers'] as FormArray);
    if (event.target.checked) {
      selectedManufacturers.push(new FormControl(event.target));
    } else {
      const index = selectedManufacturers.controls
        .findIndex(x => x === event.target);
      selectedManufacturers.removeAt(index);
    }
  }

  public filter(): void {
    const selectedManufacturers = this.form.value['selectedManufacturers'];
    if (!selectedManufacturers.length) {
      this.vehicleList = this.defaultVehicleList;
      return;
    }

    this.vehicleList = [];
    selectedManufacturers.forEach((selectedManufacturer: any) => {
      const vehicles = this.defaultVehicleList.filter(value => value.make === selectedManufacturer)
      if (vehicles) {
        this.vehicleList = [...this.vehicleList, ...vehicles];
      }
    });
  }
}
