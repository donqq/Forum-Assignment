
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import { ActivatedRoute } from '@angular/router';
import {RepliesService} from "../replies.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit {

  private topicTitle;
  private replies;
  errorMessage = "none";
  sucessMessage = "none"


  constructor(private nav : NavgivationServiceService,private parameters : ActivatedRoute, private allReplies : RepliesService) { }

  ngOnInit() {
    this.nav.showLogin();
    this.parameters.paramMap.subscribe(parameters => {
      console.log(parameters);
      this.topicTitle = parameters.get("id");
      this.replies = this.allReplies.sampleCommon();
    })
  }

  passVal($f : NgForm){
    console.log($f.value)
    if($f.value.One || $f.value.Two || $f.value.Three  || $f.value.Four || $f.value.Five ){
      this.errorMessage = "none";
      this.sucessMessage = "block"
    }else{
      this.errorMessage = "block";
      this.sucessMessage = "none"
    }
  }

}
