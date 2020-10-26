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
