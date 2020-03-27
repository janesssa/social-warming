import React from 'react'
import '../styles/index.scss';
import ContentBlock from './ContentBlock'

const Section = ({content}) => {
    const className = `container ${content.bgColor}`
    return (
        <div className={className}>
            <div class="title"> 
                <h2 class="firstTitle">{content.firstTitle}</h2>
                <h2 class="secondTitle">{content.secondTitle}</h2>
            </div>

            <p className='intro'>{content.intro}</p>
            {content.contentBlocks.map((block, i) => (
                <ContentBlock content={block} i={i} />
            ))}
        </div>
    )
}

export default Section
