import React from 'react'

function FormLogin() {
    return (
        <div>
            <form>
                <input type = 'text' label='email'></input>
                <input type = 'password' label='password'></input>
                <button type = 'submit'> login</button>
            </form>
        </div>
    )
}

export default FormLogin