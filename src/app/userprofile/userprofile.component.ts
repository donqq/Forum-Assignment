
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */

import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileName
  sucessMessage = "none"
  errorMessage = "none"
  Myself = false;

  constructor(private nav : NavgivationServiceService,private parameters : ActivatedRoute) { }

  ngOnInit() {
    this.nav.showLogin();
    this.parameters.paramMap.subscribe(parameters => {
      console.log(parameters);
      if(parameters.get("id") != null)
      {
        this.profileName = "This is " + parameters.get("id") + "'s Profile";
      }
      else{
        this.Myself = true;
        this.profileName = "This is My Profile";
      }
    })
  }

  userban(){
    if(this.Myself == true){
      this.errorMessage = "block";
    }else{
      this.sucessMessage = "block";
    }
  }

}
