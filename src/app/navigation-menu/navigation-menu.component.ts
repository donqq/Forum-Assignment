import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor(private navCondition : NavgivationServiceService) { }

  ngOnInit() {

  }
}
