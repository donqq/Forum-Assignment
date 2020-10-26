
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */

import { Injectable } from '@angular/core';

@Injectable()
export class TopicsService {

  constructor() { }

  topics()
  {
    return [
      {topicName: 'Londontec Trip 2 2018', startedBy: 'Akeel', startedDate : '2018/03/21'},
      {topicName: 'Londontec Social Network Links', startedBy: 'Akeel', startedDate : '2018/03/20'},
      {topicName: 'Announcement for Web Design Module', startedBy: 'Pradeep', startedDate : '2018/03/10'},
      {topicName: 'Lost and Found in HND Computing Class', startedBy: 'Pradeep', startedDate : '2018/03/01'},
      {topicName: 'Announcement for HND Students', startedBy: 'Zufer', startedDate : '2018/02/05'},
      {topicName: 'Londontec Festival', startedBy: 'Akeel', startedDate : '2018/02/01'},
      {topicName: 'Assignment Help', startedBy: 'Thusi', startedDate : '2018/01/10'},
      {topicName: 'Best Resources for HND', startedBy: 'Dilanga', startedDate : '2018/01/06'},
      {topicName: 'List of HND Modules', startedBy: 'Akeel', startedDate : '2018/01/03'},
      {topicName: 'Londontec Trip 2018', startedBy: 'Akeel', startedDate : '2018/01/01'}
    ];
  }

  dashboard()
  {
    return [
      {topicName: 'Londontec Trip 2 2018', startedBy: 'Akeel', startedDate : '2018/03/21'},
      {topicName: 'Londontec Social Network Links', startedBy: 'Akeel', startedDate : '2018/03/20'},
      {topicName: 'Londontec Festival', startedBy: 'Akeel', startedDate : '2018/02/01'},
      {topicName: 'List of HND Modules', startedBy: 'Akeel', startedDate : '2018/01/03'},
      {topicName: 'Londontec Trip 2018', startedBy: 'Akeel', startedDate : '2018/01/01'}
    ];
  }
}

