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
