import { Component } from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import { swipeAnimation} from "./app-router-animation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    swipeAnimation
  ]
})
export class AppComponent {
  title = 'angular-project';
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
