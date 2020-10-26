
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */

import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  private topicTitle;

  constructor(private nav : NavgivationServiceService,private parameters : ActivatedRoute) { }

  ngOnInit() {
    this.nav.showLogin();
    this.parameters.paramMap.subscribe(parameters => {
      console.log(parameters);
      this.topicTitle = parameters.get("id");
    })
  }


}
