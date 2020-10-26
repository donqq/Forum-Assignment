import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  courses(){
    return [{'id':1,'itemName':'Computing'},
          {'id':2,'itemName':'HRM'},
          {'id':3,'itemName':'Business Management'},
          {'id':4,'itemName':'Early Childhood Care & Education'},
          {'id':5,'itemName':'Hospitality, Tourism and Event Management'}]
    }
}
