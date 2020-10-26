
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reply-post-page',
  templateUrl: './reply-post-page.component.html',
  styleUrls: ['./reply-post-page.component.css']
})
export class ReplyPostPageComponent implements OnInit {
  errorMessage = "none";
  sucessMessage = "none"

  constructor(private nav : NavgivationServiceService) { }

  ngOnInit() {
    this.nav.showLogin();
  }

  passVal($f : NgForm){
    console.log($f.value)
    if(!$f.value.replyBody)
    {
      this.errorMessage = "block";
      this.sucessMessage = "none";
    }
    else{
      this.errorMessage = "none";
      this.sucessMessage = "block";
    }
  }

}
