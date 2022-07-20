import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  slider: any;
  userName!: any;
  responsiveOptions:any;
  constructor(
    public stateService:StateService
  ) { }

  ngOnInit(): void {
    this.userName = this.stateService.getState().userName
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },]
  }

  selected!: Date | null;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
//   imageObject: Array<object> = [
//    {
//     image: '/assets/images/slider/1.jpg', // Support base64 image
//     thumbImage: '/assets/images/slider/1.jpg', // Support base64 image
// },
// {
//   image: '/assets/images/slider/2.jpg', // Support base64 image
//   thumbImage: '/assets/images/slider/2.jpg', // Support base64 image
// },

// {
//   image: '/assets/images/slider/3.jpg', // Support base64 image
//   thumbImage: '/assets/images/slider/3.jpg', // Support base64 image
// },

// {
//   image: '/assets/images/slider/4.jpg', // Support base64 image
//   thumbImage: '/assets/images/slider/4.jpg', // Support base64 image
// },

// ];
prevImageClick() {
  this.slider.prev();
}

nextImageClick() {
  this.slider.next();
}

}
