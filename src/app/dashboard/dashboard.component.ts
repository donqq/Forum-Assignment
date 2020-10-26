
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */

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

  constructor(public nav: NavgivationServiceService, public latestTopic: TopicsService, public Allreplies: RepliesService) { }
  public topics = [];
  public Londontecreplies = [];
  public akeelReplies = [];

  ngOnInit() {
    this.nav.showLogin();
    this.topics = this.latestTopic.dashboard();
    this.Londontecreplies = this.Allreplies.sampleCommon();
    this.akeelReplies = this.Allreplies.Akeel();
  }

}
