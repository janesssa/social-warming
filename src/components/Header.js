import React from 'react'

const Header = ({content}) => {
    return (
        <div className='header'>


            <div class="title"> 

                <h1 class="firstTitle">{content.firstTitle}</h1>
                <h2 class="secondTitle">{content.secondTitle}</h2>
            </div>
            <p class="promo">
            {content.intro}
            <br></br>
            <br></br>
            <button> Lees verder </button>
            </p>
            
        </div>
    )
}

export default Header