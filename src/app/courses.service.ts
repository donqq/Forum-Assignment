
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  public courses() {
    return [{'id': 1, 'itemName': 'Computing'},
          {'id': 2, 'itemName': 'HRM'},
          {'id': 3, 'itemName': 'Business Management'},
          {'id': 4, 'itemName': 'Early Childhood Care & Education'},
          {'id': 5, 'itemName': 'Hospitality, Tourism and Event Management'}]
    }
}
