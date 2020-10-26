import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import { TopicsService } from '../topics.service';
import { RepliesService } from '../replies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private nav : NavgivationServiceService,private latestTopic : TopicsService, private Allreplies : RepliesService) { }
  private topics = [];
  private Londontecreplies = [];
  private akeelReplies = [];

  ngOnInit() {
    this.nav.showLogin();
    this.topics = this.latestTopic.dashboard();
    this.Londontecreplies = this.Allreplies.sampleCommon();
    this.akeelReplies = this.Allreplies.Akeel();
  }

}
