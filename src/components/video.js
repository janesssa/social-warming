import React from 'react'

const Video = ({ content }) => {
    return (
        <div class="videoContainer">

            <div id="video"> </div>
            <div class="title">
                <h1 class="firstTitle">{content.firstTitle}</h1>
                <h2 class="secondTitle">{content.secondTitle}</h2>
            </div>
            <div className='video'>
                <iframe title="Main menu" id="" type="text/html" height="350" width="540" src={content.url}> </iframe>
            </div>
        </div>
    );
};

export default Video;

