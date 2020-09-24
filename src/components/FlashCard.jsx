import React from 'react'

function FlashCard(props) {
    return (
        <div className='card-container'>
            <div className='front-side'>
                <div>
                    {props.frontContent}
                    <button> flip card</button>
                </div>
            </div>
            <div className='back-side'>
                <div>
                    {props.backContent}
                    <button> flip card</button>
                </div>
            </div>
            
        </div>
    )
}

export default FlashCard
