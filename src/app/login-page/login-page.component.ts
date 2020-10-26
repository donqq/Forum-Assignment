import { Component, OnInit } from '@angular/core';
import { NavgivationServiceService } from '../navgivation-service.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorMessage = 'none';
  sucessMessage = 'none';
  errorMsg = '';

  constructor(private nav: NavgivationServiceService, private route: Router) { }

  ngOnInit() {
    this.nav.shownonLogin();
  }

  passVal($f: NgForm) {
    console.log($f.value)
    if (!$f.value.password || !$f.value.username) {
      this.errorMessage = 'block';
      this.sucessMessage = 'none';
      this.errorMsg = 'Both Password and Username are required.!';
    }
    if ($f.value.password && $f.value.username) {
      if ($f.value.username === 'test' && $f.value.password === 'test') {
        this.errorMessage = 'none';
        this.sucessMessage = 'block';
        this.route.navigateByUrl('/Dashboard');
      } else {
        this.errorMessage = 'block';
        this.sucessMessage = 'none';
        this.errorMsg = 'Either Password or Username is incorrect.!';
      }
    }
  }

}
