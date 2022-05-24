import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-reshma-pw-validator',
  template: `
  <p>ZOOM ON HOVER PLUGGABLE ANIMATION</p>
  <img libZoomOnHover src="assets/download (2).jpg">
  <img libZoomOnHover src="assets/download.jpg">
  <img libZoomOnHover src="assets/download (1).jpg">
  `,
  styles: [
       `*{background-color: black;
           color: white;
           font-size: x-large;
           text-align: center;}

        img{
            width: 300px;
            height: 300px;
            margin:50px;
            transition: transform 2s;
        }`
  ]
})
export class ReshmaPwValidatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
