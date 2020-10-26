
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Injectable } from '@angular/core';

@Injectable()
export class NavgivationServiceService {
  dashboard
  topics
  sign;

  constructor() {
    this.dashboard = false;
    this.topics = false;
    this.sign = true;
  }

  showLogin(){
    this.dashboard = true;
    this.topics = true;
    this.sign = false;
  }

  shownonLogin(){
    this.dashboard = false;
    this.topics = false;
    this.sign = true;
  }
}
