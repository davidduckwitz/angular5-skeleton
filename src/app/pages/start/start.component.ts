import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../../_animations/fadeinanimation';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
