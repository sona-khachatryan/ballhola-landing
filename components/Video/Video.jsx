'use client';

import React from 'react';

function Video(props) {
   return (
      <div className='video-container container'>
         <p className='video-title'>The video demonstration of US</p>
         <div>
            <video className='video' controls>
               <source src='' type=''/>
            </video>
         </div>
      </div>
   );
}

export default Video;