import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { NavgivationServiceService } from '../navgivation-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private topics = [];

  constructor(private latestTopic : TopicsService, private nav : NavgivationServiceService) { }

  ngOnInit() {
    this.topics = this.latestTopic.topics();
    this.nav.shownonLogin();
  }

}
