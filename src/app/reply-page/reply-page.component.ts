import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.css']
})
export class ReplyPageComponent implements OnInit {

  constructor(private nav : NavgivationServiceService) { }

  ngOnInit() {
    this.nav.showLogin();
  }

}
