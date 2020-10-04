import React from "react";
import "./components-styling/FlashCard.css";

function FlashCard(props) {
  return (
    <label>
        <input type='checkbox' className='flashcard-input'/>
        <div className='flip-card'>
            <div className='front'>
                <span>What is Redux ?</span>
                <p>Click to flip</p>
            </div>
            <div className='back'>
                <span>Redux is state management library</span>
                <p className='click'>Click to flip</p>

            </div>
        </div>
    </label>
  );
}

export default FlashCard;

// <div id ={props.id} className='card-container'>
//     <div className='front-side'>
//         <div>
//             {props.frontContent}
//             this is front content
//             <button> flip card</button>
//         </div>
//     </div>
//     <div className='back-side'>
//         <div>
//             {props.backContent}
//             this is back side content
//             <button> flip card</button>
//         </div>
//     </div>

// </div>
