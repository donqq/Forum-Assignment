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
