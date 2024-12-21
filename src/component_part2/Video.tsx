import animeVideo from '../aseests/video.mp4';


const Video = () => {
    return (
        <>
            <div className=" mx-8 ">
                {/* Corrected the video path and added required attributes */}
                <video autoPlay loop muted
                    src={animeVideo}
                    className='rounded-2xl  '

                ></video>
            </div>
        </>
    );
};

export default Video;
