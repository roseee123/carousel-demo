import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  Swiper1: Swiper;
  Swiper2: Swiper;
  Swiper3: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.Swiper1 = new Swiper('#swiper1', {
        direction: 'horizontal', // 垂直切换选项
        slidesPerView: 1,
        autoplay: {
          delay: 3000, // 3秒切换一次
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          hideOnClick: false
        },
      });
      this.Swiper2 = new Swiper('#swiper2', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      this.Swiper3 = new Swiper('#swiper3', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView: 1,
        autoplay: {
          delay: 1000, // 1秒切换一次
        },
      });
    }, 300);
  }

}
