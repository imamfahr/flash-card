import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <h1><Link to='/'>Logo</Link></h1>
            <ul>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/Register'>Register</Link></li>
                <li><Link to ='/FlashPage'>Flash cards</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
