import React from 'react'

function FlashCardForm(props) {
    return (
        <div>
            <form onSubmit={props.cardSubmit}>
                <input name='frontContent' placeholder='ex : What is redux ?' value={props.frontContent}></input>
                <input name='backContent' placeholder='ex: Redux is state management library' value={props.backContent}></input>
                <button type='submit'>Create Flash Card</button>
            </form>
            
        </div>
    )
}

export default FlashCardForm
