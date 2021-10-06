import React from 'react'
import Circle from './Circle'
const StartUps = ({logo, website, pitchDeck, pitchVideo, contactTeam, title, content}) => {
    return (
        <>
        <div className='startup'>
            <div className='startup_left'>
                <img src={logo} className='startup_left-image'/>
            </div>
            <div className='startup_right'>
                <h1 className='startup_right-title'>{title}</h1>
                <p className='startup_right-p'>{content}</p>

                <div className='startup_right-circles'>
                    <Circle link={website} title='Website'>
                       
                    </Circle>
                    <Circle link={pitchDeck} title='Pitch Deck'>
                       
                    </Circle>
                    <Circle link={pitchVideo} title='Pitch Video'>
                       
                    </Circle>
                    <Circle link={contactTeam} title='Contact This Team'>
                       
                    </Circle>
                </div>

                </div>
                </div>
                <hr width='70%'/>
        </>
    )
}

export default StartUps
