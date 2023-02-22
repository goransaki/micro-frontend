import { Component, OnInit } from '@angular/core';
import { NgxCommonUiLibService } from 'ngx-common-ui-lib';
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {
  $eventBus?: Subscription;
  value: any;

  constructor(private service: NgxCommonUiLibService) {
    service.print();
  }

  onEventHandler(e: CustomEvent) {
    console.log("Evp me pvde");
    if (e.detail.eventType === 'auth-register') {
     this.value = e.detail;
     console.log(this.value);
    }
  }

  ngOnInit() {
    console.log( "Nastao sam opet " + this.value );
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e) => this.onEventHandler(e));
    console.log(this.$eventBus);
  }

}
