import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private nav : NavgivationServiceService) { }

  ngOnInit() {
    this.nav.shownonLogin();
  }

}
