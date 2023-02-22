import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public defaultVehicleList: any[] = [
    {
      id: 1,
      title: 'Mercedes Benz Car',
      imageUrl: 'assets/img/01.jpg',
      price: '85.620 KM',
      manufacturer: 'mercedes'
    },
    {
      id: 2,
      title: 'Yellow Ferrari 458',
      imageUrl: 'assets/img/01.jpg',
      price: '235.100 KM',
      manufacturer: 'ferrari'
    },
    {
      id: 3,
      title: 'Black Audi Q7',
      imageUrl: 'assets/img/01.jpg',
      price: '65.560 KM',
      manufacturer: 'audi'
    },
    {
      id: 4,
      title: 'BMW Sports Car',
      imageUrl: 'assets/img/01.jpg',
      price: '35.100 KM',
      manufacturer: 'bmw'
    }
  ];

  public vehicleList: any[] = [];

  public form: FormGroup;
  public manufacturerList: any[] = [
    {name: 'Mercedes', value: 'mercedes'},
    {name: 'BMW', value: 'bmw'},
    {name: 'VW', value: 'vw'},
    {name: 'Audi', value: 'audi'},
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      selectedManufacturers: new FormArray([])
    });
  }

  public ngOnInit(): void {
    this.filter();
    sessionStorage.setItem('vehicleList', JSON.stringify(this.defaultVehicleList));
  }

  public onCheckboxChange(event: any) {
    const selectedManufacturers = (this.form.controls['selectedManufacturers'] as FormArray);
    if (event.target.checked) {
      selectedManufacturers.push(new FormControl(event.target.value));
    } else {
      const index = selectedManufacturers.controls
        .findIndex(x => x.value === event.target.value);
      selectedManufacturers.removeAt(index);
    }
  }

  public filter(): void{
    const selectedManufacturers = this.form.value['selectedManufacturers'];
    if (!selectedManufacturers.length) {
      this.vehicleList = this.defaultVehicleList;
      return;
    }

    this.vehicleList = [];
    selectedManufacturers.forEach((selectedManufacturer: any) => {
      const vehicles = this.defaultVehicleList.filter(value => value.manufacturer === selectedManufacturer)
      if (vehicles) {
        this.vehicleList = [...this.vehicleList, ...vehicles];
      }
    });
  }
}
