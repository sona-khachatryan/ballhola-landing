'use client';

import React from 'react';
import Image from 'next/image';

function CustomSlide({index, user}) {
   return (
      <>
         <div className='slider__card'>
            <div className='slider__card-user-info'>
               {/*<img className='slider__card-image' src={user.image} alt='user'/>*/}
               {/*<Image className='slider__card-image' src={user.image} alt='user' priority unoptimized height={44} width={44}/>*/}
               <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <p className='slider__card-name'>
                     {user.name}
                  </p>
                  <div className='slider__card-rating'>
                     {[1,2,3,4,5].map(star =>
                        <img key={star} className='slider__card-star' src='Star.svg' alt='star'/>
                     )}
                  </div>
               </div>
            </div>
            <div className='slider__card-review'>
               {user.review}
            </div>
         </div>
      </>
   );
}

export default CustomSlide;