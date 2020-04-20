import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Video = ({ content }) => {
    return (
        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <div className="videoContainer">
                <div id="video"> </div>
                <div className="title">
                    <h1 className="firstTitle">{content.firstTitle}</h1>
                    <h2 className="secondTitle">{content.secondTitle}</h2>
                </div>
                <div className='video'>
                    <iframe title="Main menu" id="" type="text/html" height="350" width="540" src={content.url}> </iframe>
                </div>
            </div>
        </ScrollAnimation>

    );
};

export default Video;

