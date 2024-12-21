// import React from 'react';

import animeVideo from '../aseests/video.mp4';

const Animation_ = () => {
  return (
    <>
      {/* Red Background (No Animation) */}

      <div className=''>

        <div className="w-2/4 h-3/4 bg-[#FE3204] right-0 top-[80vh] filter blur-xl absolute rounded-s-full"></div>

        {/* Green Div (Moves in X direction) */}
        <div className="w-1/4 h-2/4 bg-[#FE3204] right-96 top-[80vh] filter blur-xl absolute rounded-full animate-moveX"></div>

        {/* Blue Div (Moves in Y direction) */}
        <div className="w-1/4 h-2/4 bg-[#FE3204] right-64 top-[75vh] filter blur-xl absolute rounded-full animate-moveY"></div>
      </div>


      <div className=" mx-8 z-1000 relative">
        {/* Corrected the video path and added required attributes */}
        <video autoPlay loop muted
          src={animeVideo}
          className='rounded-2xl  '

        ></video>
      </div>
    </>
  );
};

export default Animation_;
