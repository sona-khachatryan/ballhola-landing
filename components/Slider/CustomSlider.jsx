'use client';

import React from 'react';
import Slider from 'react-slick';
import CustomSlide from '@/components/Slider/CustomSlide';

const reviewDataMockup = [
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 3,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
   {
      image: 'userPhoto.jpg',
      name: 'John Smith',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
   },
];
function CustomSlider(props) {

   const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      speed: 500,
      dots: true,
      accessibility: true,
      arrows: false, 
      touchMove: true,
      appendDots: dots => (
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               margin: '-20px 0',
               gap: 15,
            }}
         >
            {dots}
         </div>
      ),
      customPaging: i => (
         <div
            style={{
               width: '22px',
               height: '22px',
               borderRadius: '50%',
               backgroundColor: '#16D0B8',
               transition: 'width 0.3s, height 0.3s',
            }}
         ></div>
      ),

      responsive: [
         {
            breakpoint: 1279,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               centerMode: false,
               centerPadding: -10,
               appendDots: dots => (
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '-10px 0',
                        gap: 5,
                     }}
                  >
                     {dots}
                  </div>
               ),
               customPaging: i => (
                  <div
                     style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#16D0B8',
                        // transition: 'width 0.3s, height 0.3s',
                     }}
                  ></div>
               ),
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               centerMode: false,
               centerPadding: 0,
               appendDots: dots => (
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '-10px 0',
                     }}
                  >
                     {dots}
                  </div>
               ),
               customPaging: i => (
                  <div
                     style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#16D0B8',
                        // transition: 'width 0.3s, height 0.3s',
                     }}
                  ></div>
               ),
            }
         },

         {
            breakpoint: 639,
            settings: {
               className: 'center',
               slidesToShow: 1,
               slidesToScroll: 1,
               centerMode: true,
               centerPadding: '100px',
               appendDots: dots => (
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '-10px 0',
                     }}
                  >
                     {dots}
                  </div>
               ),
               customPaging: i => (
                  <div
                     style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#16D0B8',
                        // transition: 'width 0.3s, height 0.3s',
                     }}
                  ></div>
               ),
            }
         }
      ]
   };
    
   return (
      <div id='reviews' className='slider-main-container container'>
         <div className='slider__title-container container'>
            <p className='slider__title'>
                   Satisfied Users are Our best Ads!
            </p>
         </div>

         <div className='slider__cards-container slider-container'>
            <div className='slider__decor-1'>,,</div>
            <div className='slider__decor-2'>,,</div>
            <Slider {...settings}>
               {reviewDataMockup.map((user, index) =>
                  <CustomSlide key={index} user={user}/>
               )}
            </Slider>
         </div>
      </div>

   );
}

export default CustomSlider;