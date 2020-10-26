import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  private topics = [];
  
  constructor(private nav : NavgivationServiceService,private latestTopic : TopicsService) { }

  ngOnInit() {
    this.nav.showLogin();
    this.topics = this.latestTopic.topics();
  }

}
