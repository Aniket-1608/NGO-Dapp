import React from "react";
import YouTube from 'react-youtube';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import video1 from "../images/video1.mp4";

const Gallery = () => {
    // YouTube video options
    const opts = {
        height: '400px',
        width: '585px',
        playerVars: {
        autoplay: 0,
        },
    };
    // YouTube video IDs
    const videoIds = ['tFpkJoNi8Ik', 'MfGoZCbdZ5g', 'wl5WLDs6fP8','Nx3CfpFKD_A'];

    console.log("I clicked the Gallery Tab")
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ width: '40%', padding: '10px' }}>
                <img src={image1} alt="Image 1" style={{ width: '585px', height: '400px' }} />
            </div>
            <div style={{ width: '40%', padding: '10px' }}>
                <img src={image2} alt="Image 2" style={{ width: '585px', height: '400px' }} />
            </div>
            <div style={{ width: '40%', padding: '10px' }}>
                <img src={image3} alt="Image 3" style={{ width: '585px', height: '400px' }} />
            </div>
            <div style={{ width: '40%', padding: '10px' }}>
                <img src={image4} alt="Image 4" style={{ width: '585px', height: '400px' }} />
            </div>
            <div style={{ width: '40%', padding: '10px' }}>
                <img src={image5} alt="Image 5" style={{ width: '585px', height: '400px' }} />
            </div>
            <div style={{ width: '40%', padding: '10px' }}>
                <img src={image6} alt="Image 6" style={{ width: '585px', height: '400px' }} />
            </div>
            <div>    
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {videoIds.map((videoId, index) => (
                    <div key={index} style={{ width: '40%', padding: '10px' }}>
                        <YouTube videoId={videoId} opts={opts} />
                    </div>
                    ))}
                    <div style={{ width: '40%', padding: '10px' }}>
                        <video controls style={{ width: '585px', height: '400px' }}>
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
      );
    
};
export default Gallery; 