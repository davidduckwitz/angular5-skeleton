import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  loggedIn: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
	if (localStorage.getItem('xCurrentUser')) {
	   // logged in so return true
		this.loggedIn = true;            
	} else {
		this.loggedIn = false;
	}
  }
  ngOnChanges() {
	if (localStorage.getItem('xCurrentUser')) {
	   // logged in so return true
		this.loggedIn = true;            
	} else {
		this.loggedIn = false;
	}
  }

}
