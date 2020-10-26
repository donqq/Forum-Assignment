
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-topic-post-page',
  templateUrl: './topic-post-page.component.html',
  styleUrls: ['./topic-post-page.component.css']
})
export class TopicPostPageComponent implements OnInit {
  errorMessage = "none";
  sucessMessage = "none"

  constructor(private nav : NavgivationServiceService) { }

  ngOnInit() {
    this.nav.showLogin();
  }

  passVal($f : NgForm){
    console.log($f.value)
    if(!$f.value.topicname || !$f.value.topiccontent)
    {
      this.errorMessage = "block";
      this.sucessMessage = "none";
    }
    if($f.value.topicname && $f.value.topiccontent)
    {
      this.errorMessage = "none";
      this.sucessMessage = "block";
    }
  }

}
