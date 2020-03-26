import React from 'react'

import ContentBlock from './ContentBlock'

// Title
// Intro
// ContentBlocks

const Section = ({content}) => {
    const className = `container ${content.bgColor}`
    return (
        <div className={className}>
            <h2>{content.title}</h2>
            <p>{content.intro}</p>
            {content.contentBlocks.map((block, i) => (
                <ContentBlock content={block} i={i} />
            ))}
        </div>
    )
}

export default Section