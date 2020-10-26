
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import { CoursesService } from '../courses.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  private allCourses = []
  errorMessage = "none";
  sucessMessage = "none"
  private dropdownList = [];
  private selectedItems = [];
  private dropdownSettings = {};

  constructor(private nav : NavgivationServiceService, private course : CoursesService) { }

  ngOnInit() {
    this.nav.shownonLogin();

    //*******//*******//*******//*******//*******//*******//*******
        this.dropdownList = this.course.courses()
        this.dropdownSettings = {
                  singleSelection: false,
                  text:"All Courses",
                  selectAllText:'Select All',
                  unSelectAllText:'UnSelect All',
                  enableSearchFilter: false,
                  classes:"myclass custom-class"
                };
        }

        onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
        }
        OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
        }
        onSelectAll(items: any){
        console.log(items);
        }
        onDeSelectAll(items: any){
        console.log(items);
        }
    /***///*******//*******//*******//*******//*******//*******

  passVal($f : NgForm){
    console.log($f.value)
    if($f.value.password != $f.value.confirmpassword)
    {
      this.errorMessage = "block";
      this.sucessMessage = "none";
    }
    if($f.value.password == $f.value.confirmpassword)
    {
      this.errorMessage = "none";
      this.sucessMessage = "block";
    }
  }
}
