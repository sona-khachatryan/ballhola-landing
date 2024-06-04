'use client';

import React from 'react';

function CustomSlide({index, user}) {
   return (
      <>
         <div className='slider__card'>
            <div className='slider__card-user-info'>
               <img className='slider__card-image' src={user.image} loading='lazy' alt='user photo'/>
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