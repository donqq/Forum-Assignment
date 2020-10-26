
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */

import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { NavgivationServiceService } from '../navgivation-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  topics = [];

  constructor(private latestTopic: TopicsService, private nav: NavgivationServiceService) { }

  ngOnInit() {
    this.topics = this.latestTopic.topics();
    this.nav.shownonLogin();
  }

}
