
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Injectable } from '@angular/core';

@Injectable()
export class RepliesService {

  constructor() { }

  public sampleCommon() {
    return [
      {replyContent: 'I am going too', startedBy: 'Kavidu', startedDate : '2018/01/02', id: 'One'},
      {replyContent: 'I am not going, will see in the next time', startedBy: 'Sitara', startedDate : '2018/01/02', id: 'Two'},
      {replyContent: 'hopefully I can go', startedBy: 'Navoda', startedDate : '2018/01/03', id: 'Three'},
      {replyContent: 'Thanks guys for reply', startedBy: 'Akeel', startedDate : '2018/01/03', id: 'Four'},
      {replyContent: 'No problem', startedBy: 'Kavidu', startedDate : '2018/01/03', id: 'Five'}
    ];
  }

  public Akeel() {
    return [
      {replyContent: 'Thanks guys for reply', startedBy: 'Akeel', startedDate : '2018/01/03', id: 'Six'},
    ];
  }
}

/*All Replies
Londontec Trip 2018//
I am going too, kavidu, 2018/01/02
I am not going, will see in the next time, sitara, 2018/01/02
hopefully I can go, navoda, 2018/01/03
thanks guys for reply, akeel, 2018/01/03
no problem, kavidu, 2018/01/03
*/
