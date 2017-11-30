import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pagenotfound',
    templateUrl: 'pagenotfound.component.html'
})

export class PageNotFoundComponent implements OnInit {    

    constructor() { }

    ngOnInit() {
      console.log('Page Not Found: 404');  
    }
    
}
