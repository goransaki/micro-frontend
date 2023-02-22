import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  public vehicleList: any[] = [];
  public vehicle: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const vehicleListString = sessionStorage.getItem('vehicleList');
    this.vehicleList = JSON.parse((vehicleListString ? vehicleListString : ''));
    this.vehicle = this.vehicleList.find(value => value.id == id);
  }

}
